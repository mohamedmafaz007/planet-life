import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from 'express-fileupload';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (e) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// --- AUTH ---
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { res.status(400).json({ message: 'Missing credentials' }); return; }

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) { res.status(401).json({ message: 'Invalid credentials' }); return; }

  const isValid = await bcrypt.compare(password, admin.passwordHash);
  if (!isValid) { res.status(401).json({ message: 'Invalid credentials' }); return; }

  const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET!, { expiresIn: '7d' });
  res.status(200).json({ token });
});

// --- CACHE ---
let destinationsCache: any = null;

// --- DESTINATIONS ---
app.get('/api/destinations', async (req, res) => {
  if (destinationsCache) {
    res.status(200).json(destinationsCache);
    return;
  }
  const destinations = await prisma.destination.findMany({
    include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
    orderBy: { name: 'asc' },
  });
  destinationsCache = destinations;
  res.status(200).json(destinations);
});

app.post('/api/destinations', verifyToken, async (req, res) => {
  const data = req.body;
  try {
    const newDest = await prisma.destination.create({
      data: {
        id: data.id, name: data.name, country: data.country, description: data.description,
        image: data.image, video: data.video, featured: data.featured || false,
        whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || [],
        packages: {
          create: (data.packages || []).map((pkg: any) => ({
            id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
            price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
            itinerary: { create: (pkg.itinerary || []).map((day: any) => ({ day: day.day, title: day.title, description: day.description, activities: day.activities || [] })) }
          }))
        }
      },
      include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
    });
    destinationsCache = null;
    res.status(201).json(newDest);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/destinations/:id', async (req, res) => {
  const { id } = req.params;
  const destination = await prisma.destination.findUnique({
    where: { id },
    include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
  });
  if (!destination) { res.status(404).json({ message: 'Not found' }); return; }
  res.status(200).json(destination);
});

app.put('/api/destinations/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await prisma.package.deleteMany({ where: { destinationId: id } });
    const updatedDest = await prisma.destination.update({
      where: { id },
      data: {
        name: data.name, country: data.country, description: data.description,
        image: data.image, video: data.video, featured: data.featured || false,
        whyVisit: data.whyVisit || [], adventureImages: data.adventureImages || [],
        packages: {
          create: (data.packages || []).map((pkg: any) => ({
            id: pkg.id, duration: pkg.duration, nights: pkg.nights, days: pkg.days,
            price: pkg.price, image: pkg.image, inclusions: pkg.inclusions || [],
            itinerary: { create: (pkg.itinerary || []).map((day: any) => ({ day: day.day, title: day.title, description: day.description, activities: day.activities || [] })) }
          }))
        }
      },
      include: { packages: { include: { itinerary: { orderBy: { day: 'asc' } } } } },
    });
    destinationsCache = null;
    res.status(200).json(updatedDest);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/destinations/:id', verifyToken, async (req, res) => {
  try {
    await prisma.destination.delete({ where: { id: req.params.id } });
    destinationsCache = null;
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// --- CONTENT ---
app.get('/api/content/:page', async (req, res) => {
  const { page } = req.params;
  const content = await prisma.pageContent.findUnique({ where: { page } });
  res.status(200).json(content || { page, data: {} });
});

app.put('/api/content/:page', verifyToken, async (req, res) => {
  const { page } = req.params;
  const data = req.body;
  try {
    const updatedContent = await prisma.pageContent.upsert({
      where: { page },
      update: { data },
      create: { page, data },
    });
    res.status(200).json(updatedContent);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// --- UPLOAD ---
app.post('/api/upload', verifyToken, async (req, res) => {
  if (!req.files || !req.files.file) {
    res.status(400).json({ message: 'No file provided' });
    return;
  }
  const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file as fileUpload.UploadedFile;
  const folder = req.body.folder || 'planet_life/media';

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: folder,
      resource_type: 'auto',
    });
    res.status(200).json({ url: result.secure_url, public_id: result.public_id });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

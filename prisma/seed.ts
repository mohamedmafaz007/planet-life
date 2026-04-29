import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { v2 as cloudinary } from 'cloudinary';
import { destinations } from '../src/data/destinations';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

// Configure cloudinary for the seed script
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadToCloudinary(localPath: string, folder: string) {
  try {
    let fullPath = path.resolve(__dirname, '..', 'src', 'assets', localPath);
    
    // Check if file exists in root of assets
    if (!fs.existsSync(fullPath)) {
      // Try to find it in subdirectories
      const assetsDir = path.resolve(__dirname, '..', 'src', 'assets');
      const findFile = (dir: string): string | null => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isDirectory()) {
            const found = findFile(filePath);
            if (found) return found;
          } else if (file === localPath) {
            return filePath;
          }
        }
        return null;
      };
      
      const foundPath = findFile(assetsDir);
      if (foundPath) {
        fullPath = foundPath;
      } else {
        console.warn(`File not found, skipping upload: ${localPath}`);
        return localPath; // fallback to original name
      }
    }

    console.log(`Uploading ${localPath} from ${fullPath}...`);
    const result = await cloudinary.uploader.upload(fullPath, {
      folder,
      resource_type: 'auto',
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${localPath}:`, error);
    return localPath; // fallback
  }
}

const defaultHomeContent = {
  heroTitle: "Let's Go Travel",
  heroSubtitle: "Discover the world's most breathtaking destinations with curated premium packages",
  whyChooseUsTitle: "Why Choose Planet Life?",
  whyChooseUsSubtitle: "We deliver exceptional travel experiences with attention to every detail",
  ctaTitle: "Ready to Start Your Adventure?",
  ctaText: "Contact us today to plan your dream vacation. Our travel experts are ready to help you create unforgettable memories."
};

const defaultAboutContent = {
  heroTitle: "About Planet Life",
  heroSubtitle: "Creating unforgettable travel experiences since day one",
  ourStoryTitle: "Our Story",
  ourStoryText: "Planet Life was founded with a simple vision: to make world-class travel experiences accessible to everyone. We believe that travel is not just about visiting new places; it's about creating memories, discovering cultures, and connecting with the world.\n\nOur team of travel experts carefully curates each destination and package, ensuring that every detail is perfect. From the moment you contact us to the moment you return home, we're committed to providing exceptional service and unforgettable experiences.\n\nWith thousands of satisfied travelers and a 4.9 Google rating, we've established ourselves as a trusted name in premium travel. Our passion is your adventure, and we're here to make your dream vacation a reality.",
  founderTitle: "Meet Our Founder",
  founderText: "\"Travel isn't just about seeing new places; it's about the transformation that happens within us when we step outside our comfort zone.\"\n\nDriven by an insatiable wanderlust and a deep curiosity for the world's diverse cultures, our founder established Planet Life with a singular mission: to share the magic of travel with others.\n\nWith years of personal exploration across continents, he understands that the best journeys are those that are authentic, immersive, and worry-free. His passion lies in crafting experiences that go beyond the guidebook, connecting travelers with the heart and soul of each destination.",
  founderImage: "founder.jpg", // Will be uploaded if in assets
  missionTitle: "Our Mission",
  missionText: "To inspire and enable people to explore the world, creating transformative travel experiences that broaden perspectives, foster connections, and create lasting memories. We strive to make every journey extraordinary through meticulous planning, exceptional service, and genuine care for our travelers."
};

const defaultContactContent = {
  heroTitle: "Get in Touch",
  heroSubtitle: "Ready to plan your next adventure? We're here to help!",
  sectionTitle: "Contact Information",
  sectionText: "Have questions about our packages or need help planning your trip? Reach out to us through any of the following channels:",
  phone: "+91 99945 58497",
  email: "planetlifecamping@gmail.com",
  instagram: "@_planet_life"
};

const defaultPackagesContent = {
  heroTitle: "Our Travel Packages",
  heroSubtitle: "Find the perfect package for your next adventure"
};

async function main() {
  console.log('Starting migration...');

  // 1. Create Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@planetlife.com';
  const adminPassword = process.env.ADMIN_PASSWORD_HASH ? 
    process.env.ADMIN_PASSWORD_HASH : 
    await bcrypt.hash('password123', 10);

  await prisma.admin.upsert({
    where: { email: adminEmail },
    update: { passwordHash: adminPassword },
    create: { email: adminEmail, passwordHash: adminPassword },
  });
  console.log('Admin user created/updated.');

  // 2. Insert Page Content
  const contents = [
    { page: 'home', data: defaultHomeContent },
    { page: 'about', data: defaultAboutContent },
    { page: 'contact', data: defaultContactContent },
    { page: 'packages', data: defaultPackagesContent },
  ];

  for (const c of contents) {
    await prisma.pageContent.upsert({
      where: { page: c.page },
      update: { data: c.data },
      create: { page: c.page, data: c.data },
    });
  }
  console.log('Page content seeded.');

  // 3. Process and Insert Destinations
  // We clean up existing destinations first to avoid duplicates/conflicts during seeding
  // await prisma.destination.deleteMany();

  for (const dest of destinations) {
    console.log(`Processing destination: ${dest.name}`);
    
    // Upload main media
    const imageUrl = await uploadToCloudinary(dest.image, 'planet_life/images');
    const videoUrl = dest.video ? await uploadToCloudinary(dest.video, 'planet_life/videos') : null;
    
    // Upload adventure images
    const adventureImagesUrls = [];
    for (const advImg of (dest.adventureImages || [])) {
      const url = await uploadToCloudinary(advImg, 'planet_life/images');
      adventureImagesUrls.push(url);
    }

    // Insert/Update destination
    await prisma.destination.upsert({
      where: { id: dest.id },
      update: {
        name: dest.name,
        country: dest.country,
        description: dest.description,
        image: imageUrl,
        video: videoUrl,
        featured: dest.featured,
        whyVisit: dest.whyVisit || [],
        adventureImages: adventureImagesUrls,
        packages: {
          deleteMany: {},
          create: await Promise.all(dest.packages.map(async (pkg) => {
            const pkgImageUrl = pkg.image ? await uploadToCloudinary(pkg.image, 'planet_life/images') : null;
            return {
              id: pkg.id,
              duration: pkg.duration,
              nights: pkg.nights,
              days: pkg.days,
              price: pkg.price,
              image: pkgImageUrl,
              inclusions: pkg.inclusions || [],
              itinerary: {
                create: (pkg.itinerary || []).map(day => ({
                  day: day.day,
                  title: day.title,
                  description: day.description,
                  activities: day.activities || [],
                }))
              }
            };
          }))
        }
      },
      create: {
        id: dest.id,
        name: dest.name,
        country: dest.country,
        description: dest.description,
        image: imageUrl,
        video: videoUrl,
        featured: dest.featured,
        whyVisit: dest.whyVisit || [],
        adventureImages: adventureImagesUrls,
        packages: {
          create: await Promise.all(dest.packages.map(async (pkg) => {
            const pkgImageUrl = pkg.image ? await uploadToCloudinary(pkg.image, 'planet_life/images') : null;
            return {
              id: pkg.id,
              duration: pkg.duration,
              nights: pkg.nights,
              days: pkg.days,
              price: pkg.price,
              image: pkgImageUrl,
              inclusions: pkg.inclusions || [],
              itinerary: {
                create: (pkg.itinerary || []).map(day => ({
                  day: day.day,
                  title: day.title,
                  description: day.description,
                  activities: day.activities || [],
                }))
              }
            };
          }))
        }
      }
    });
  }

  console.log('Migration completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

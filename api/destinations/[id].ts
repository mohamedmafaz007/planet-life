import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';
import { verifyToken } from '../lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  if (!id || typeof id !== 'string') return res.status(400).json({ message: 'Invalid ID' });

  if (req.method === 'GET') {
    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        packages: {
          include: { itinerary: { orderBy: { day: 'asc' } } },
        },
      },
    });
    if (!destination) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(destination);
  }

  if (req.method === 'DELETE') {
    if (!verifyToken(req)) return res.status(401).json({ message: 'Unauthorized' });
    try {
      await prisma.destination.delete({ where: { id } });
      return res.status(200).json({ message: 'Deleted successfully' });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  if (req.method === 'PUT') {
    if (!verifyToken(req)) return res.status(401).json({ message: 'Unauthorized' });
    const data = req.body;
    try {
      await prisma.package.deleteMany({ where: { destinationId: id } });

      const updatedDest = await prisma.destination.update({
        where: { id },
        data: {
          name: data.name,
          country: data.country,
          description: data.description,
          image: data.image,
          video: data.video,
          featured: data.featured || false,
          whyVisit: data.whyVisit || [],
          adventureImages: data.adventureImages || [],
          packages: {
            create: (data.packages || []).map((pkg: any) => ({
              id: pkg.id,
              duration: pkg.duration,
              nights: pkg.nights,
              days: pkg.days,
              price: pkg.price,
              image: pkg.image,
              inclusions: pkg.inclusions || [],
              itinerary: {
                create: (pkg.itinerary || []).map((day: any) => ({
                  day: day.day,
                  title: day.title,
                  description: day.description,
                  activities: day.activities || [],
                }))
              }
            }))
          }
        },
        include: {
          packages: {
            include: { itinerary: { orderBy: { day: 'asc' } } },
          },
        },
      });
      return res.status(200).json(updatedDest);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

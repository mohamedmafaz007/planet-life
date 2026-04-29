import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';
import { verifyToken } from '../lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const destinations = await prisma.destination.findMany({
      include: {
        packages: {
          include: { itinerary: { orderBy: { day: 'asc' } } },
        },
      },
      orderBy: { name: 'asc' },
    });
    return res.status(200).json(destinations);
  }

  if (req.method === 'POST') {
    if (!verifyToken(req)) return res.status(401).json({ message: 'Unauthorized' });

    const data = req.body;
    try {
      const newDest = await prisma.destination.create({
        data: {
          id: data.id,
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
      return res.status(201).json(newDest);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

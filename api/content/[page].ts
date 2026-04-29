import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';
import { verifyToken } from '../lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { page } = req.query;
  if (!page || typeof page !== 'string') return res.status(400).json({ message: 'Invalid page' });

  if (req.method === 'GET') {
    const content = await prisma.pageContent.findUnique({
      where: { page },
    });
    // If not found, return an empty object or a default structure
    return res.status(200).json(content || { page, data: {} });
  }

  if (req.method === 'PUT') {
    if (!verifyToken(req)) return res.status(401).json({ message: 'Unauthorized' });
    const data = req.body;
    try {
      const updatedContent = await prisma.pageContent.upsert({
        where: { page },
        update: { data },
        create: { page, data },
      });
      return res.status(200).json(updatedContent);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

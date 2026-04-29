import jwt from 'jsonwebtoken';
import type { VercelRequest } from '@vercel/node';

export function verifyToken(req: VercelRequest): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return false;
  try {
    jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET!);
    return true;
  } catch {
    return false;
  }
}

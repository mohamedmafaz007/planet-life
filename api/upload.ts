import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyToken } from './lib/auth';
import cloudinary from './lib/cloudinary';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  if (!verifyToken(req)) return res.status(401).json({ message: 'Unauthorized' });

  const form = new IncomingForm({
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Upload parsing error' });

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) return res.status(400).json({ message: 'No file provided' });

    const folder = Array.isArray(fields.folder) ? fields.folder[0] : fields.folder || 'planet_life/media';

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: folder,
        resource_type: 'auto',
      });

      return res.status(200).json({ url: result.secure_url, public_id: result.public_id });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  });
}

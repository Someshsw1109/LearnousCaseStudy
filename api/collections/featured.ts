import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const collections = await storage.getFeaturedCollections();
    res.status(200).json(collections);
  } catch (error) {
    console.error('Error fetching featured collections:', error);
    res.status(500).json({ error: 'Failed to fetch featured collections' });
  }
}
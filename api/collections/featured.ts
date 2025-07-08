import type { VercelRequest, VercelResponse } from '@vercel/node';

const featuredCollections = [
  {
    id: 1,
    name: "Executive Collection",
    description: "Professional handbags for the modern executive",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    featured: true
  },
  {
    id: 2,
    name: "Urban Essentials",
    description: "Versatile pieces for city living",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    featured: true
  },
  {
    id: 3,
    name: "Heritage Collection",
    description: "Timeless designs with traditional craftsmanship",
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    featured: true
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json(featuredCollections);
  } catch (error) {
    console.error('Error fetching featured collections:', error);
    res.status(500).json({ error: 'Failed to fetch featured collections' });
  }
}
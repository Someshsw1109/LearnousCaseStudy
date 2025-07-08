import type { VercelRequest, VercelResponse } from '@vercel/node';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Marketing Executive",
    content: "The Executive Tote has become my daily companion. The quality is exceptional and the functional design makes my workday so much easier. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b6fc7ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Ananya Patel",
    title: "Entrepreneur",
    content: "I love the Urban Crossbody! Perfect size for my essentials and the leather quality is amazing. The craftsmanship really shows in every detail.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Rhea Kulkarni",
    title: "Creative Director",
    content: "The Heritage Structured bag is simply stunning. It's elegant, sophisticated, and goes with everything in my wardrobe. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
}
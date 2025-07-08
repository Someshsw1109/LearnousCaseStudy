import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize storage data inline for serverless function
const featuredProducts = [
  {
    id: 1,
    name: "The Executive Tote",
    description: "Premium full-grain leather with gold hardware",
    price: "16999",
    category: "Tote",
    collection: "Executive Collection",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
    ],
    materials: ["Full-grain leather", "Gold hardware", "Silk lining"],
    features: ["Lipstick slots", "Makeup pocket", "Retractable ID lanyard", "Inbuilt mirror stand"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Urban Crossbody",
    description: "Versatile design for modern professionals",
    price: "11999",
    category: "Crossbody",
    collection: "Urban Essentials",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
    ],
    materials: ["Premium leather", "Antique brass hardware", "Canvas lining"],
    features: ["Adjustable strap", "Multiple compartments", "Secure zip closure", "Phone pocket"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Heritage Structured",
    description: "Classic structured handbag with modern functionality",
    price: "19999",
    category: "Structured",
    collection: "Heritage Collection",
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    images: [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
    ],
    materials: ["Italian leather", "Rose gold hardware", "Suede lining"],
    features: ["Structured design", "Top handle", "Detachable shoulder strap", "Interior organizer"],
    inStock: true,
    featured: true
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json(featuredProducts);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    res.status(500).json({ error: 'Failed to fetch featured products' });
  }
}
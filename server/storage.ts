import { products, collections, testimonials, users, type Product, type Collection, type Testimonial, type User, type InsertUser, type InsertProduct, type InsertCollection, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCollection(collection: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getCollections(): Promise<Collection[]>;
  getFeaturedCollections(): Promise<Collection[]>;
  getCollection(id: number): Promise<Collection | undefined>;
  createCollection(collection: InsertCollection): Promise<Collection>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private collections: Map<number, Collection>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentProductId: number;
  private currentCollectionId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.collections = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentCollectionId = 1;
    this.currentTestimonialId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize collections
    const collectionsData = [
      {
        id: 1,
        name: "Executive Collection",
        description: "Professional elegance meets functionality",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        featured: true
      },
      {
        id: 2,
        name: "Urban Essentials",
        description: "Versatile designs for modern living",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        featured: true
      },
      {
        id: 3,
        name: "Heritage Series",
        description: "Traditional craftsmanship reimagined",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        featured: true
      },
      {
        id: 4,
        name: "Evening Luxe",
        description: "Sophisticated elegance for special occasions",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        featured: true
      }
    ];

    collectionsData.forEach(collection => {
      this.collections.set(collection.id, collection);
    });

    // Initialize products
    const productsData = [
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
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
        ],
        materials: ["Premium leather", "Adjustable strap", "Cotton lining"],
        features: ["Hidden pad pocket", "Brush holders", "Multiple compartments"],
        inStock: true,
        featured: true
      },
      {
        id: 3,
        name: "Heritage Structured",
        description: "Traditional craftsmanship meets contemporary style",
        price: "19999",
        category: "Structured",
        collection: "Heritage Series",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        images: [
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
        ],
        materials: ["Vegetable-tanned leather", "Brass hardware", "Premium fabric lining"],
        features: ["Traditional craftsmanship", "Structured design", "Spacious interior"],
        inStock: true,
        featured: true
      },
      {
        id: 4,
        name: "Evening Clutch",
        description: "Sophisticated elegance for special occasions",
        price: "8999",
        category: "Clutch",
        collection: "Evening Luxe",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
        images: [
          "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
        ],
        materials: ["Luxury suede", "Gold chain", "Silk interior"],
        features: ["Detachable chain", "Compact design", "Evening elegance"],
        inStock: true,
        featured: false
      }
    ];

    productsData.forEach(product => {
      this.products.set(product.id, product);
    });

    // Initialize testimonials
    const testimonialsData = [
      {
        id: 1,
        name: "Priya Sharma",
        title: "Marketing Director",
        location: "Mumbai",
        content: "The quality is exceptional and the design perfectly balances elegance with functionality. It's become my go-to bag for both work and special occasions.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      },
      {
        id: 2,
        name: "Anjali Patel",
        title: "Architect",
        location: "Delhi",
        content: "Finally found a handbag that combines traditional Indian craftsmanship with modern style. The leather quality is outstanding and ages beautifully.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      },
      {
        id: 3,
        name: "Kavya Reddy",
        title: "Entrepreneur",
        location: "Bangalore",
        content: "Morel Q understands what modern Indian women need. The bags are spacious, stylish, and built to last. Worth every rupee!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
      }
    ];

    testimonialsData.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });

    this.currentProductId = productsData.length + 1;
    this.currentCollectionId = collectionsData.length + 1;
    this.currentTestimonialId = testimonialsData.length + 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCollection(collection: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.collection === collection);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      images: insertProduct.images || [],
      materials: insertProduct.materials || [],
      features: insertProduct.features || [],
      inStock: insertProduct.inStock ?? true,
      featured: insertProduct.featured ?? false
    };
    this.products.set(id, product);
    return product;
  }

  async getCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }

  async getFeaturedCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values()).filter(collection => collection.featured);
  }

  async getCollection(id: number): Promise<Collection | undefined> {
    return this.collections.get(id);
  }

  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const id = this.currentCollectionId++;
    const collection: Collection = { 
      ...insertCollection, 
      id,
      featured: insertCollection.featured ?? false
    };
    this.collections.set(id, collection);
    return collection;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();

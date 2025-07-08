export const BRAND_COLORS = {
  burgundy: 'hsl(343, 75%, 30%)',
  gold: 'hsl(45, 73%, 52%)',
  cream: 'hsl(60, 29%, 90%)',
  charcoal: 'hsl(0, 0%, 20%)',
  roseGold: 'hsl(350, 30%, 80%)',
  ivory: 'hsl(60, 100%, 97%)',
} as const;

export const COMPANY_INFO = {
  name: 'MOREL Q',
  tagline: 'Purpose-Driven Functional Luxury',
  description: 'Addressing the unmet needs of urban women who demand more from their fashion accessories',
  email: 'info@morelq.com',
  phone: '+91 98765 43210',
  address: {
    street: '123 Fashion Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India'
  }
} as const;

export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  twitter: '#',
  pinterest: '#'
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
] as const;

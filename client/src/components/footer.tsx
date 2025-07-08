import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h5 className="text-2xl font-serif font-bold text-gold mb-4">MOREL Q</h5>
            <p className="text-gray-400 mb-4">
              Purpose-driven functional luxury handbags crafted with traditional Indian excellence for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h6 className="text-lg font-semibold text-gold mb-4">Collections</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-gold transition-colors">
                  Executive Collection
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Urban Essentials
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Heritage Series
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Evening Luxe
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h6 className="text-lg font-semibold text-gold mb-4">Customer Service</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-gold transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Shipping Information
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Care Instructions
                </button>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h6 className="text-lg font-semibold text-gold mb-4">About</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-gold transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Craftsmanship
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Sustainability
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors">
                  Press
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Morel Q. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

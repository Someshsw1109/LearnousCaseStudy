import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-burgundy tracking-wide">
              MOREL Q
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-charcoal hover:text-burgundy transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-charcoal hover:text-burgundy transition-colors font-medium"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-charcoal hover:text-burgundy transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-charcoal hover:text-burgundy transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-burgundy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-burgundy transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("collections")}
                className="text-charcoal hover:text-burgundy transition-colors font-medium text-left"
              >
                Collections
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-burgundy transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-charcoal hover:text-burgundy transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

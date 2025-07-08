import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-cream to-rose-gold">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
           }} />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-burgundy mb-6 leading-tight">
            Purpose-Driven<br />
            <span className="text-gold">Functional Luxury</span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal mb-8 max-w-2xl mx-auto leading-relaxed">
            Addressing the unmet needs of urban women who demand more from their fashion accessories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("collections")}
              className="bg-burgundy text-white px-8 py-4 rounded-sm font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Explore Collections
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-sm font-medium hover:bg-burgundy hover:text-white transition-all"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

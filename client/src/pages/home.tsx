import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import BrandStory from "@/components/brand-story";
import Collections from "@/components/collections";
import FeaturedProducts from "@/components/featured-products";
import Craftsmanship from "@/components/craftsmanship";
import Materials from "@/components/materials";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Hero />
      <BrandStory />
      <Collections />
      <FeaturedProducts />
      <Craftsmanship />
      <Materials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

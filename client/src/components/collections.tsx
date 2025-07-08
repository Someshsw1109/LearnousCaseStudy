import { useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Collection } from "@shared/schema";

export default function Collections() {
  const { data: collections, isLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections/featured"],
  });

  if (isLoading) {
    return (
      <section id="collections" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collections" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-burgundy mb-4">
            Luxury Collections
          </h3>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Discover our carefully curated collections of premium leather handbags, 
            crafted with traditional Indian excellence and modern functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections?.map((collection) => (
            <Card key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-serif font-bold text-burgundy mb-2">
                  {collection.name}
                </h4>
                <p className="text-charcoal mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold">From ₹8,999</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-burgundy hover:text-gold transition-colors"
                  >
                    <Heart size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-burgundy text-white px-8 py-4 rounded-sm font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}

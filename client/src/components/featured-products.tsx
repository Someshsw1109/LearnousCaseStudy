import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="group">
                <Skeleton className="w-full h-80 rounded-lg" />
                <div className="mt-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-burgundy mb-4">
            Signature Pieces
          </h3>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Handcrafted with precision using premium Indian leather, each piece tells a story of excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <div key={product.id} className="group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="mt-4">
                <h4 className="text-xl font-serif font-bold text-burgundy">
                  {product.name}
                </h4>
                <p className="text-charcoal mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-gold">
                    ₹{parseInt(product.price).toLocaleString()}
                  </span>
                  <Button className="bg-burgundy text-white px-4 py-2 rounded-sm hover:bg-opacity-90 transition-all">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

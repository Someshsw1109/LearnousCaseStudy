export default function Materials() {
  const materials = [
    {
      name: "Full-Grain Leather",
      description: "The highest quality leather that ages beautifully",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Italian Hardware",
      description: "Premium metal components for lasting durability",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Vegetable Tanned",
      description: "Eco-friendly process for natural leather aging",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Luxury Lining",
      description: "Silk and premium fabric interiors",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-burgundy mb-4">
            Premium Materials
          </h3>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            We source only the finest materials to ensure each handbag meets our exacting standards of quality and durability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="text-center">
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-serif font-bold text-burgundy mb-2">
                {material.name}
              </h4>
              <p className="text-charcoal">{material.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

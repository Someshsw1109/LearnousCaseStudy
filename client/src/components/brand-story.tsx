export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-serif font-bold text-burgundy mb-6">
              The Modern Indian Woman
            </h3>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              In an increasingly design-conscious and digitally connected India, the modern woman is seeking fashion that reflects her lifestyle, personality, and purpose. Morel Q has carved a distinctive niche in the luxury leather handbag segment.
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              We champion functional luxury and purpose-driven design, addressing the evolving needs of urban women who demand sophistication, quality, and meaning from their fashion accessories.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">75%</div>
                <div className="text-sm text-charcoal">Prefer Indian Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">60%</div>
                <div className="text-sm text-charcoal">Prioritize Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">55%</div>
                <div className="text-sm text-charcoal">Prefer Leather</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional Indian woman with luxury handbag"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

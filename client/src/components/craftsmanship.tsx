export default function Craftsmanship() {
  return (
    <section id="about" className="py-20 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Indian leather craftsman at work"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-4xl font-serif font-bold text-gold mb-6">
              Indian Leather Excellence
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              India accounts for approximately 12.9% of the world's leather production, making it one of the top leather-producing countries globally. Our craftsmanship draws from this rich heritage.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">12.9%</div>
                <div className="text-sm text-gray-400">World's Leather Production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">3000+</div>
                <div className="text-sm text-gray-400">Tanneries in India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">4.42M</div>
                <div className="text-sm text-gray-400">People Employed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">$3.5B</div>
                <div className="text-sm text-gray-400">Export Value (2022-23)</div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 3,000 tanneries and eight major leather clusters across India, we leverage traditional techniques passed down through generations to create modern luxury accessories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

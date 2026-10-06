const Features = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white">
            Why use Thumbnail Maker?
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to create eye-catching thumbnails that boost clicks.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(255,0,128,0.15)]">
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              🧠
            </div>
            <h3 className="text-xl font-semibold text-white">
              Smart Analysis
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Our AI analyzes your content and generates thumbnails optimized for clicks and engagement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(255,0,128,0.15)]">
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              🎯
            </div>
            <h3 className="text-xl font-semibold text-white">
              Eye-Catching Designs
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              High-contrast colors, bold text, and proven layouts that stand out in feeds.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(255,0,128,0.15)]">
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              ✏️
            </div>
            <h3 className="text-xl font-semibold text-white">
              Fully Customizable
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Choose styles, colors, layouts, and fine-tune results to match your brand.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;

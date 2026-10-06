const CTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl 
                        bg-gradient-to-r from-pink-700 via-pink-600 to-pink-700
                        px-10 py-14 flex flex-col md:flex-row items-center
                        justify-between gap-8">

          {/* Glow */}
          <div className="absolute inset-0 bg-pink-500/30 blur-3xl opacity-30"></div>

          {/* Text */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to go viral?
            </h2>
            <p className="mt-2 text-pink-100 max-w-xl">
              Join thousands of creators using AI to boost their CTR.
            </p>
          </div>

          {/* Button */}
          <button
            className="relative z-10 px-8 py-3 rounded-full bg-white
                       text-black font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;

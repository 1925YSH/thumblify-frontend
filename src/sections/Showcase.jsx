import showcaseImg from "../assets/showcase.png";

const Showcase = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(255,0,128,0.15)]">
              <img
                src={showcaseImg}
                alt="AI Thumbnail Generator Preview"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold text-white">
              Designed to help creators
              <span className="text-pink-500"> grow faster</span>
            </h2>

            <p className="mt-6 text-gray-400">
              Our AI understands what makes people click. From layout to colors,
              every thumbnail is crafted to maximize engagement and CTR.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-white">10x</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Faster thumbnail creation
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-white">+35%</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Average CTR boost
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-white">50k+</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Thumbnails generated
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl font-bold text-white">5k+</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Happy creators
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;

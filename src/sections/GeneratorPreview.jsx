const GeneratorPreview = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* OUTER SECTION (HOVER GROUP) */}
        <div className="group border-2 border-pink-500/60 rounded-3xl p-6 md:p-8 bg-black/40 backdrop-blur transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,128,0.25)] hover:-translate-y-1">

          <div className="grid md:grid-cols-2 gap-6">

            {/* LEFT: FORM */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 transition-all duration-300 group-hover:border-pink-400/60">
              <h3 className="text-white text-xl font-semibold">
                Create Your Thumbnail
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Describe your vision and let AI bring it to life
              </p>

              {/* Title */}
              <div className="mt-5">
                <label className="text-sm text-gray-300">
                  Title or Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 Tips for Better Sleep"
                  className="mt-2 w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Aspect Ratio */}
              <div className="mt-5">
                <label className="text-sm text-gray-300">
                  Aspect Ratio
                </label>
                <div className="mt-2 flex gap-3">
                  {["16:9", "1:1", "9:16"].map((ratio) => (
                    <button
                      key={ratio}
                      className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 transition hover:border-pink-500"
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div className="mt-5">
                <label className="text-sm text-gray-300">
                  Thumbnail Style
                </label>
                <select className="mt-2 w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white">
                  <option>Bold & Graphic</option>
                  <option>Minimal</option>
                  <option>Professional</option>
                </select>
              </div>

              {/* Colors */}
              <div className="mt-5">
                <label className="text-sm text-gray-300">
                  Color Scheme
                </label>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {["#ff0080", "#ff9800", "#00c3ff", "#22c55e", "#a855f7"].map(
                    (color) => (
                      <div
                        key={color}
                        className="w-7 h-7 rounded-md cursor-pointer border border-white/10 transition hover:scale-110"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Additional Prompt */}
              <div className="mt-5">
                <label className="text-sm text-gray-300">
                  Additional Details (optional)
                </label>
                <textarea
                  placeholder="Add any specific elements, mood, or style..."
                  className="mt-2 w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white h-24 resize-none"
                />
              </div>
            </div>

            {/* RIGHT: PREVIEW */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col transition-all duration-300 group-hover:border-pink-400/60">
              <h3 className="text-white text-xl font-semibold">
                Preview
              </h3>

              <div className="flex-1 mt-4 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center text-gray-400 transition-all duration-300 group-hover:border-pink-400">
                <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  🖼️
                </div>
                <p className="text-sm">
                  Generate your first thumbnail
                </p>
                <p className="text-xs mt-1">
                  Fill out the form and click Generate
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorPreview;

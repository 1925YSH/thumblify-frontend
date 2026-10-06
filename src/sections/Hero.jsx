import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff008055,transparent_40%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* NEW Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-pink-500/40 text-sm text-pink-400 mb-6">
          <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
            NEW
          </span>
          Generate your first thumbnail for free →
        </div>

        {/* Heading */}
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
>
  AI Thumbnail Generator <br />
  for your{" "}
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
  >
    Videos
  </motion.span>
  .
</motion.h1>


        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Stop wasting hours on design. Get high-converting thumbnails
          in seconds with our advanced AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/generate"
            className="px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Generate now
          </a>

          <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            View Creations
          </button>
        </div>

        {/* Feature Checks */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-pink-500">✔</span>
            No design skills needed
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-500">✔</span>
            Fast generation
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-500">✔</span>
            High CTR templates
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

const testimonials = [
  {
    name: "Liam Brooks",
    role: "@liambrooks",
    text: "Setup was ridiculously easy. Within 10 minutes, we were running live.",
  },
  {
    name: "Sophia Carter",
    role: "@sophiacodes",
    text: "This SaaS app completely streamlined our onboarding process.",
  },
  {
    name: "Ethan Walker",
    role: "@ethanwrites",
    text: "We’ve tried several tools, but nothing comes close to this.",
  },
  {
    name: "Maya Patel",
    role: "@mayapatel",
    text: "The automation features alone have saved our team countless hours.",
  },
];

const MarqueeRow = ({ reverse = false }) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...testimonials, ...testimonials].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[320px] bg-white/5 border border-pink-500/20 rounded-2xl p-6 backdrop-blur
                       hover:border-pink-500/60 hover:bg-pink-500/10 transition-all duration-300"
          >
            {/* Review text */}
            <p className="text-gray-300 text-sm leading-relaxed">
              “{item.text}”
            </p>

            {/* User info */}
            <div className="mt-5 flex items-center gap-3">
              {/* Avatar */}
              <img
                src={`https://avatar.vercel.sh/${item.name
                  .replace(" ", "")
                  .toLowerCase()}`}
                alt={item.name}
                className="w-9 h-9 rounded-full border border-pink-500/30 bg-black"
              />

              {/* Name & role */}
              <div>
                <p className="text-white font-semibold text-sm leading-none">
                  {item.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center">
          Loved by creators
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
          See how our AI thumbnails are helping channels explode their views.
        </p>

        {/* Marquee */}
        <div className="mt-16 space-y-8">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </div>

      {/* LEFT BLUR */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 
                      bg-gradient-to-r from-black via-black/80 to-transparent z-20" />

      {/* RIGHT BLUR */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 
                      bg-gradient-to-l from-black via-black/80 to-transparent z-20" />
    </section>
  );
};

export default Testimonials;

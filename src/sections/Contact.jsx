const Contact = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm">
            Contact
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center">
          Grow your channel
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
          Have questions about our Thumbnail Maker? Ready to scale your views? Let’s talk.
        </p>

        {/* Form */}
        <form className="mt-16 space-y-6">

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-300">
                Your name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full bg-black border border-white/15 rounded-xl px-4 py-3
                           text-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Email id
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full bg-black border border-white/15 rounded-xl px-4 py-3
                           text-white focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows={6}
              className="mt-2 w-full bg-black border border-white/15 rounded-xl px-4 py-3
                         text-white focus:outline-none focus:border-pink-500 resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-pink-600 text-white font-semibold
                         hover:bg-pink-700 transition flex items-center gap-2"
            >
              Submit →
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;

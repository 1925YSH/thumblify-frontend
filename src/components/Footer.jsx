const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-700" />
              ThumbnailGo
            </div>

            <p className="mt-5 text-gray-400 text-sm max-w-sm leading-relaxed">
              Making every customer feel valued — no matter the size of your audience.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Pages
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "Generate", "Recreate", "Community"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["About Us", "Contact Us", "Pricing"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row 
                        items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ThumbnailGo
          </p>

          <p className="text-gray-500 text-sm">
            Making every customer feel valued — no matter the size of your audience.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Show, UserButton } from "@clerk/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Generate", path: "/generate" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-linear-to-b from-black/80 to-black/10 backdrop-blur-3xl "
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            Thumblify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition relative
                  ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-500 transition-all
                    ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            ))}
          </div>

          {/* CTA / User Profile */}
          <div className="hidden md:flex items-center gap-4">
            <Show when="signed-out">
              <Link to="/login" className="text-gray-300 hover:text-white transition">
                Sign In
              </Link>
              <Link
                to="/generate"
                className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
              >
                Get Started
              </Link>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg">
          <div className="absolute right-0 top-0 h-full w-64 bg-black p-6">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl mb-6"
            >
              ✕
            </button>

            {/* Links */}
            <div className="flex flex-col gap-5">
              {links.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white text-lg"
                >
                  {item.name}
                </Link>
              ))}

              <Show when="signed-out">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white text-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/generate"
                  onClick={() => setOpen(false)}
                  className="mt-6 px-5 py-2 rounded-full bg-pink-500 text-white font-semibold text-center"
                >
                  Get Started
                </Link>
              </Show>
              <Show when="signed-in">
                <div className="mt-6 flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </Show>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

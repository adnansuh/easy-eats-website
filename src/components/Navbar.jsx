import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Typography.png";

const navLinks = [
  { name: "Home", to: "/#items" },
  { name: "Services", to: "/#services" },
  { name: "About", to: "/#about" },
  { name: "Items", to: "/#items" },
  { name: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          fixed top-0 left-0 w-full z-50
          bg-white/80 backdrop-blur-xl
          border-b border-black/5
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Easy Eats"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.to.replace("/", "")}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.to} className="nav-link">
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="tel:9876543210"
            className="
              hidden md:inline-block
              px-7 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-purpleBright to-mint
              shadow-lg hover:shadow-xl hover:scale-105
              transition
            "
          >
            Call Now
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-gray-800 transition ${open && "rotate-45 translate-y-2"}`} />
            <span className={`h-0.5 w-6 bg-gray-800 transition ${open && "opacity-0"}`} />
            <span className={`h-0.5 w-6 bg-gray-800 transition ${open && "-rotate-45 -translate-y-2"}`} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              fixed top-[72px] left-0 w-full z-40
              bg-white/95 backdrop-blur-xl
              border-b border-black/5
              md:hidden
            "
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) =>
                link.to.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.to.replace("/", "")}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-700"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-700"
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* MOBILE CTA */}
              <a
                href="tel:9876543210"
                className="
                  mt-4 px-8 py-3 rounded-full font-semibold text-white
                  bg-gradient-to-r from-purpleBright to-mint
                  shadow-lg
                "
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LINK STYLE */}
      <style>
        {`
          .nav-link {
            color: #374151;
            font-weight: 500;
            position: relative;
            transition: color 0.3s;
          }
          .nav-link:hover {
            color: #115e59;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            height: 2px;
            width: 0;
            background: #34d399;
            transition: width 0.3s;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}

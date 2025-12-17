import { motion } from "framer-motion";
import logo from "../assets/Typography.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/75 backdrop-blur-xl
        border-b border-black/5
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO ONLY (NO TEXT) */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Easy Eats"
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-700 font-medium
                hover:text-deepTeal transition
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-mint
                hover:after:w-full after:transition-all
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:9876543210"
          className="
            px-7 py-3 rounded-full font-semibold text-white
            bg-gradient-to-r from-purpleBright to-mint
            shadow-lg hover:shadow-xl hover:scale-105
            transition
          "
        >
          Call Now
        </a>

      </div>
    </motion.nav>
  );
}

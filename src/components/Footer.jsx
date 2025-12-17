import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-soft via-soft to-white border-t border-black/10">

      
      {/* LOGO WATERMARK */}
      <img
        src="/assets/logo-outline.png"
        alt=""
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[700px]
          opacity-[0.07]
          blur-sm
          pointer-events-none
          z-0
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold text-teal mb-4">
            Easy Eats
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Delivering fresh, hygienic chicken, beef, mutton, and fish
            straight to your home with honesty and care.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-teal mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/" className="hover:text-purpleBright transition">Home</a></li>
            <li><a href="/items" className="hover:text-purpleBright transition">Items</a></li>
            <li><a href="#about" className="hover:text-purpleBright transition">About</a></li>
            <li><a href="#contact" className="hover:text-purpleBright transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-teal mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-gray-600">
            <li>📞 <a href="tel:8075535269" className="hover:text-purpleBright transition">8075535269</a></li>
            <li>💬 <a href="https://chat.whatsapp.com/YOUR_GROUP_LINK" target="_blank" className="hover:text-purpleBright transition">WhatsApp Group</a></li>
            <li>🐟 Fish availability updates daily</li>
          </ul>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-black/5 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Easy Eats. All rights reserved.
      </div>
    </footer>
  );
}

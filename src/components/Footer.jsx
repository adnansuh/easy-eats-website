export default function Footer() {
  return (
    <footer className="bg-white pt-20">
      {/* TOP INFO STRIP */}
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10 mb-16">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-extrabold text-teal mb-4">
            Easy Eats
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Delivering fresh, hygienic chicken, beef, mutton, and fish straight
            to your home with honesty and care.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-teal mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#home" className="hover:text-purpleDark">Home</a></li>
            <li><a href="#services" className="hover:text-purpleDark">Services</a></li>
            <li><a href="#about" className="hover:text-purpleDark">About</a></li>
            <li><a href="/items" className="hover:text-purpleDark">Items</a></li>
            <li><a href="#contact" className="hover:text-purpleDark">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold text-teal mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>📞 8075 535 269</li>
            <li>💬 WhatsApp Orders</li>
            <li>🐟 Fish availability updated daily</li>
            <li className="text-sm text-gray-500 mt-2">
              Local delivery only
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ BRAND COLORED COPYRIGHT BAR */}
      <div className="bg-gradient-to-r from-mint to-teal py-4">
        <p className="text-center text-white text-sm font-medium">
          © {new Date().getFullYear()} Easy Eats. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
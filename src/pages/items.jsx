import { motion } from "framer-motion";

const items = [
  {
    name: "Chicken",
    desc: "Freshly cut, clean, and hygienically packed chicken.",
    image: "/assets/chicken.jpg",
    action: "call",
  },
  {
    name: "Mutton",
    desc: "Premium quality mutton cut fresh on order.",
    image: "/assets/mutton.jpg",
    action: "call",
  },
  {
    name: "Beef",
    desc: "High-quality beef prepared with strict hygiene standards.",
    image: "/assets/beef.jpg",
    action: "call",
  },
  {
    name: "Fish (Daily Catch)",
    desc: "Fresh fish varies daily. Updates are shared in our WhatsApp group.",
    image: "/assets/fish.jpg",
    action: "whatsapp",
  },
];

export default function Items() {
  return (
    <section id="items" className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-gradient-to-br from-soft via-white to-soft">
      
      {/* LOGO WATERMARK BACKGROUND */}
      <img
        src="/assets/logo-outline.png"
        alt=""
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px]
          opacity-[0.04]
          blur-sm
          pointer-events-none
          z-0
        "
      />

      {/* BRAND BLOBS */}
      <div className="absolute -top-32 -left-32 w-[26rem] h-[26rem] bg-mint/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-32 w-[26rem] h-[26rem] bg-purpleBright/25 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal mb-4">
            Our Items
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our fresh range. Fish availability depends on the daily catch.
          </p>

          <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purpleBright to-mint" />
        </motion.div>

        {/* ITEMS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="
                bg-white/90 backdrop-blur-md
                rounded-3xl shadow-xl overflow-hidden
                border border-black/5
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-teal mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {item.desc}
                </p>

                {/* ACTION BUTTON */}
                {item.action === "call" ? (
                  <a
                    href="tel:8075535269"
                    className="
                      block px-6 py-3 rounded-full
                      bg-gradient-to-r from-purpleDark to-purpleBright
                      text-white font-semibold shadow-lg
                      hover:shadow-xl transition
                    "
                  >
                    Call to Order
                  </a>
                ) : (
                  <a
                    href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block px-6 py-3 rounded-full
                      bg-gradient-to-r from-green-500 to-green-600
                      text-white font-semibold shadow-lg
                      hover:shadow-xl transition
                    "
                  >
                    Join WhatsApp Group
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-20 text-gray-600">
          <p>
            🐟 Fish availability depends on daily catch.  
            Join our WhatsApp group for fresh updates.
          </p>
        </div>

      </div>
    </section>
  );
}

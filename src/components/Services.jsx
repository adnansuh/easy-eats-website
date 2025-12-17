import { motion } from "framer-motion";
import {
  FaDrumstickBite,
  FaShieldAlt,
  FaTruck,
  FaFish,
} from "react-icons/fa";

const services = [
  {
    title: "Freshly Cut Meat",
    desc: "Chicken, mutton, and beef cut fresh on order with strict hygiene standards.",
    icon: FaDrumstickBite,
  },
  {
    title: "Clean & Hygienic",
    desc: "Handled with care, cleaned properly, and packed safely for delivery.",
    icon: FaShieldAlt,
  },
  {
    title: "Doorstep Delivery",
    desc: "Fast and reliable delivery straight to your home with a simple call.",
    icon: FaTruck,
  },
];

const freshItems = [
  "Chicken",
  "Mutton",
  "Beef",
  "Fish – Fresh Catch",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden
      bg-gradient-to-br from-[#e6fffa] via-white to-[#f3e8ff]"
    >
      {/* background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00BFA6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Freshness, hygiene, and happiness — delivered straight to your home.
          </p>

          <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-teal-400" />
        </motion.div>

        {/* service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8
              shadow-xl hover:shadow-2xl transition"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl
                bg-gradient-to-br from-purple-600 to-teal-400 text-white text-xl mb-6"
              >
                <service.icon />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              <div
                className="absolute inset-x-0 bottom-0 h-1 rounded-b-3xl
                bg-gradient-to-r from-purple-600 to-teal-400
                scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* fresh items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Fresh Range Available
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {freshItems.map((item, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-purple-600 to-teal-400 shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

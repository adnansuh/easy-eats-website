import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden
      bg-gradient-to-br from-[#f3e8ff] via-white to-[#e6fffa]"
    >
      {/* background glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Easy Eats
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Built with a simple mission — delivering freshness, hygiene, and happiness to every home.
          </p>

          <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-teal-400" />
        </motion.div>

        {/* content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ABOUT COMPANY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Company
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Easy Eats was started to solve one simple problem — access to
              clean, hygienic, and freshly cut meat without the hassle of
              visiting crowded markets.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We focus on quality sourcing, strict hygiene practices, and
              doorstep delivery to ensure every order brings trust and comfort
              to your family.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From chicken, mutton, beef to fresh catch fish — everything is
              prepared only after you place your order.
            </p>
          </motion.div>

          {/* ABOUT FOUNDER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About the Founder
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Easy Eats was founded by someone who strongly believes that food
              quality directly impacts health and happiness.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              With a vision to modernize traditional meat delivery, the founder
              focused on blending local expertise with clean processes and
              reliable service.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The goal is simple — make fresh, hygienic meat easily accessible
              while maintaining trust, transparency, and care in every delivery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

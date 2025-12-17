import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden
      bg-gradient-to-br from-[#e6fffa] via-white to-[#f3e8ff]"
    >
      {/* background glow */}
      <div className="absolute -top-32 right-0 w-[450px] h-[450px] bg-teal-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-400/20 rounded-full blur-3xl" />

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
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Order fresh, hygienic meat or reach out to us — we’re just a call away.
          </p>

          <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-teal-400" />
        </motion.div>

        {/* contact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CALL */}
          <motion.a
            href="tel:8075535269"
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-10 shadow-xl text-center
            hover:shadow-2xl transition"
          >
            <div className="mx-auto mb-6 w-16 h-16 rounded-full
              bg-gradient-to-r from-purple-600 to-teal-400
              flex items-center justify-center text-white text-2xl font-bold">
              📞
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Call Us
            </h3>

            <p className="text-gray-600">
              Place your order instantly by phone.
            </p>

            <p className="mt-4 font-semibold text-purple-600">
              8075 535269
            </p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/918075535269"
            target="_blank"
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-10 shadow-xl text-center
            hover:shadow-2xl transition"
          >
            <div className="mx-auto mb-6 w-16 h-16 rounded-full
              bg-gradient-to-r from-teal-500 to-green-400
              flex items-center justify-center text-white text-2xl font-bold">
              💬
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-600">
              Quick orders & instant responses.
            </p>

            <p className="mt-4 font-semibold text-teal-600">
              Chat on WhatsApp
            </p>
          </motion.a>

          {/* LOCATION */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-10 shadow-xl text-center
            hover:shadow-2xl transition"
          >
            <div className="mx-auto mb-6 w-16 h-16 rounded-full
              bg-gradient-to-r from-purple-500 to-pink-400
              flex items-center justify-center text-white text-2xl font-bold">
              📍
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Location
            </h3>

            <p className="text-gray-600">
              Serving fresh meat across your city.
            </p>

            <p className="mt-4 font-semibold text-purple-600">
              Local Delivery Only
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

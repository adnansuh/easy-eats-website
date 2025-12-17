import { motion } from "framer-motion";
import Lottie from "lottie-react";
import deliveryAnim from "../assets/delivery.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden
      bg-gradient-to-br from-soft via-white to-soft"
    >

      {/* BRAND BLOBS */}
      <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-mint/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-purpleBright/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal mb-6">
            Delivering Happiness To Your Home
          </h1>

          <p className="text-gray-600 max-w-lg mb-8">
            Cleanly cut • Hygienic • Delivered fresh to your doorstep
          </p>

          <motion.a
            href="tel:9876543210"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block px-10 py-4 rounded-full text-lg font-semibold text-white
              bg-gradient-to-r from-purpleDark to-purpleBright
              shadow-xl shadow-purpleBright/40
            "
          >
            Call to Order
          </motion.a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Lottie animationData={deliveryAnim} loop />
        </motion.div>
      </div>
    </section>
  );
}

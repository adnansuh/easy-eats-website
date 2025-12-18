import { motion } from "framer-motion";
import companyImg from "../assets/about-company.png"; // keep same image
import founderImg from "../assets/founder.jpg"; // keep same image

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT COMPANY */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6 text-black">
              About Easy Eats
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold text-purpleBright">Easy Eats</span>, our vision is to deliver fresh,
              hygienic chicken, beef, mutton, and fish to every home as fast and safely as possible.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We follow strict hygiene practices, source quality products, and prepare everything only after an order is placed.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to make fresh meat delivery simple, clean, and trustworthy for every family —
              with fast service, honest quality, and a smooth experience every time.
            </p>
          </motion.div>

          {/* IMAGE (SMALLER – SAME AS BEFORE) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={companyImg}
              alt="Easy Eats Delivery"
              className="relative rounded-3xl shadow-xl
                  w-full max-h-[360px] object-cover"
            />
          </motion.div>
        </div>

        {/* FOUNDER SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FOUNDER IMAGE + NAME (CENTERED) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={founderImg}
              alt="Founder Ameen"
              className="w-44 h-44 rounded-full object-cover shadow-xl mb-4"
            />

            <h4 className="text-xl font-bold">Ameen</h4>
            <p className="text-sm text-gray-500 italic mt-1">
              “Fresh food, honest service, every single time.”
            </p>
          </motion.div>

          {/* FOUNDER TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold mb-4">
              Meet the Founder
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Easy Eats was founded by <span className="font-semibold text-purpleBright">Ameen</span>, who began his journey
              in the food and delivery industry at just 17 years old.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Starting young taught him the value of hard work, customer trust, and the importance of delivering food
              that is always fresh, clean, and reliable.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Driven by a passion to modernize meat delivery, Ameen built Easy Eats with a strong focus on hygiene,
              transparency, and fast service.
            </p>

            <p className="mt-4 font-semibold text-purpleBright">
              — Founder, Easy Eats
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

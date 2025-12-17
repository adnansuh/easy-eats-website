import { motion } from "framer-motion";
import founderImg from "../assets/founder.jpg";
import companyImg from "../assets/about-company.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden
      bg-gradient-to-br from-white via-soft to-white"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-40 -right-40 w-[26rem] h-[26rem] bg-purpleBright/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[26rem] h-[26rem] bg-mint/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 space-y-28">

        {/* ================= ABOUT COMPANY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal mb-6">
              About Easy Eats
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold text-purpleDark">Easy Eats</span>,
              our vision is to deliver fresh, hygienic chicken, beef, mutton,
              and fish to every home as fast and safely as possible.
              <br /><br />
              We follow strict hygiene practices, use quality sourcing, and
              prepare everything only after an order is placed.
              <br /><br />
              Our mission is to make fresh meat delivery simple, clean, and
              trustworthy for every family — with fast service, honest quality,
              and a smooth experience every time.
            </p>
          </div>

          {/* IMAGE – FIXED CONTAINER */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-mint to-purpleBright rounded-3xl blur-md opacity-30" />

              <img
                src={companyImg}
                alt="Easy Eats service"
                className="relative rounded-3xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= FOUNDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* FOUNDER IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-br from-purpleBright to-mint rounded-2xl blur-md opacity-30" />
              <img
                src={founderImg}
                alt="Founder Ameen"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>

          {/* FOUNDER TEXT */}
          <div>
            <h3 className="text-3xl font-extrabold text-teal mb-4">
              Meet the Founder
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Easy Eats was founded by{" "}
              <span className="font-semibold text-purpleDark">Ameen</span>,
              who began his journey in the food and delivery industry at just
              17 years old.
              <br /><br />
              Starting young taught him the value of hard work, customer trust,
              and the importance of delivering food that is always fresh, clean,
              and reliable.
              <br /><br />
              Driven by a passion to modernize meat delivery, Ameen built Easy
              Eats with a strong focus on hygiene, transparency, and fast service.
            </p>

            <p className="mt-6 font-semibold text-purpleDark">
              — Founder, Easy Eats
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

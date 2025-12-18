import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://chat.whatsapp.com/HzIm2kgBEojErEpkqEbO5Y"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        bg-green-500 hover:bg-green-600
        text-white px-5 py-3
        rounded-full shadow-2xl
      "
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-semibold text-sm whitespace-nowrap">
        Today’s Special
      </span>
    </motion.a>
  );
}
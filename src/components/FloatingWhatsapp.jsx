import { m } from "../lib/motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../data/contact";

export default function FloatingWhatsapp() {
  return (
    <m.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-2xl shadow-green-500/40 text-white">
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </span>
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg glass-strong text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none hidden sm:block">
        Chat with us
      </span>
    </m.a>
  );
}

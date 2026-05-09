import { useEffect, useState } from "react";
import { m, AnimatePresence } from "../lib/motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";
import { WHATSAPP_URL } from "../data/contact";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-mi-orange blur-md opacity-60 group-hover:opacity-100 transition" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-mi-orange to-mi-orange-light flex items-center justify-center">
                <FaBolt className="text-white text-lg" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Mi<span className="text-mi-orange">Unlock</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-mi-gray hover:text-white transition rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-mi-orange to-mi-orange-light text-white font-semibold text-sm shadow-lg shadow-mi-orange/30 hover:shadow-mi-orange/50 transition-all hover:scale-105"
            >
              <span className="relative z-10">Unlock Now</span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-4 space-y-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-mi-gray hover:text-white hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-mi-orange to-mi-orange-light text-white font-semibold shadow-lg shadow-mi-orange/30"
              >
                Unlock Now
              </a>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.header>
  );
}

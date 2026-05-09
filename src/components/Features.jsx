import { m } from "../lib/motion";
import {
  FaBolt, FaLock, FaHeadset, FaWallet,
  FaMobileAlt, FaSyncAlt, FaShieldAlt, FaUsers,
} from "react-icons/fa";

const features = [
  { icon: FaBolt, title: "Instant Access", desc: "No 7-day waiting — credentials delivered in under 60 seconds after payment." },
  { icon: FaLock, title: "Pre-Verified Accounts", desc: "Every Mi account is aged, eligible & tested daily for unlock readiness." },
  { icon: FaShieldAlt, title: "Safe for Your Phone", desc: "Standard Xiaomi flow — no exploits, no bricks, no warranty issues." },
  { icon: FaWallet, title: "Affordable Plans", desc: "Starting at just $5 — cheaper than waiting a week and risking a typo." },
  { icon: FaMobileAlt, title: "All Mi & Redmi", desc: "Works with every Xiaomi, Redmi, POCO model that supports Mi Unlock." },
  { icon: FaHeadset, title: "24/7 Live Support", desc: "Stuck mid-process? Our team is on Telegram & WhatsApp anytime." },
  { icon: FaSyncAlt, title: "Reusable Sessions", desc: "Unlock multiple devices in one rental window — perfect for resellers." },
  { icon: FaUsers, title: "25K+ Customers", desc: "Trusted globally — from hobbyists to professional repair shops." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
            Why choose us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Built for <span className="text-gradient-orange">speed & safety</span>
          </h2>
          <p className="mt-4 text-mi-gray text-base sm:text-lg">
            Every detail engineered so your bootloader unlock journey is smooth, secure and stress-free.
          </p>
        </m.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <m.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group glass rounded-2xl p-6 hover:bg-white/5 hover:border-mi-orange/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mi-orange/20 to-mi-orange/5 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <f.icon className="text-mi-orange text-xl" />
              </div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-mi-gray leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

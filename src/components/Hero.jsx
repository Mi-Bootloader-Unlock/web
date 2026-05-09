import { m } from "../lib/motion";
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaBolt, FaStar } from "react-icons/fa";
import { WHATSAPP_URL } from "../data/contact";
import heroPhone from "../assets/images/hero-phone.webp";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-mi-orange/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-mi-purple/20 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-96 bg-mi-cyan/10 rounded-full blur-3xl animate-blob [animation-delay:4s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-mi-orange/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mi-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mi-orange" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-mi-orange">
                Trusted by 25,000+ Xiaomi users
              </span>
            </m.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Unlock Your{" "}
              <span className="text-gradient-orange">Mi Bootloader</span>{" "}
              <br className="hidden sm:block" />
              in <span className="text-gradient-shine">Minutes</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-mi-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Skip the 7-day Xiaomi waiting period. Rent a verified Mi account from us,
              unlock your bootloader instantly, and return it when you're done.
              Safe, fast, affordable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-mi-orange to-mi-orange-light text-white font-semibold shadow-xl shadow-mi-orange/40 hover:shadow-mi-orange/60 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Unlocking
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#how"
                className="w-full sm:w-auto px-7 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold transition flex items-center justify-center gap-2"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
              {[
                { icon: FaCheckCircle, text: "No 7-day wait" },
                { icon: FaShieldAlt, text: "100% safe" },
                { icon: FaBolt, text: "Instant access" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-mi-gray">
                  <b.icon className="text-mi-orange" />
                  {b.text}
                </div>
              ))}
            </div>
          </m.div>

          {/* Right visual */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-mi-orange via-mi-orange-light to-mi-orange rounded-3xl blur-2xl opacity-30 animate-glow" />

              {/* Phone mockup card */}
              <div className="relative glass-strong rounded-3xl p-4 sm:p-6 shadow-2xl">
                <img
                  src={heroPhone}
                  width="900"
                  height="600"
                  alt="Xiaomi Redmi smartphone with unlocked bootloader"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-mi-gray">Device</div>
                      <div className="font-semibold text-sm sm:text-base">Redmi Note 13 Pro</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      UNLOCKED
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { label: "Time", value: "2 min" },
                      { label: "Status", value: "Done" },
                      { label: "Cost", value: "₹2499" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-xl py-2">
                        <div className="text-[10px] text-mi-gray uppercase tracking-wider">{s.label}</div>
                        <div className="font-bold text-sm text-white mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <m.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-4 sm:-left-10 glass-strong rounded-2xl p-3 sm:p-4 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-mi-orange/20 flex items-center justify-center">
                  <FaBolt className="text-mi-orange" />
                </div>
                <div>
                  <div className="text-xs text-mi-gray">Avg. unlock time</div>
                  <div className="font-bold text-white">~120 sec</div>
                </div>
              </m.div>

              <m.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-10 glass-strong rounded-2xl p-3 sm:p-4 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <FaStar className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-xs text-mi-gray">User rating</div>
                  <div className="font-bold text-white">4.9 / 5.0</div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

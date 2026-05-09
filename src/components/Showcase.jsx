import { m } from "../lib/motion";
import { FaTerminal, FaChevronRight } from "react-icons/fa";

export default function Showcase() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
              Live demo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              See an <span className="text-gradient-orange">unlock</span> happen in real time
            </h2>
            <p className="mt-4 text-mi-gray text-base sm:text-lg leading-relaxed">
              Once you've signed in to the rented Mi account on the official Mi Unlock tool,
              the entire process is just a button-click away. Most users finish in under 3 minutes.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Connect device in fastboot mode",
                "Sign in with rented Mi credentials",
                "Click 'Unlock' — wait ~120 seconds",
                "Reboot, sign out, flash anything",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm sm:text-base text-mi-gray">
                  <FaChevronRight className="text-mi-orange shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-mi-orange/40 to-mi-purple/40 rounded-3xl blur-2xl opacity-50" />

            <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 text-xs text-mi-gray">
                  <FaTerminal /> mi-unlock-tool
                </div>
              </div>

              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
                <div className="text-mi-gray">$ connecting to device...</div>
                <div className="text-green-400">✔ Device detected: Redmi Note 13 Pro</div>
                <div className="text-mi-gray">$ signing in to mi account...</div>
                <div className="text-green-400">✔ Account verified — eligible</div>
                <div className="text-mi-gray">$ requesting unlock token...</div>
                <div className="text-mi-orange">→ Token granted by Xiaomi servers</div>
                <div className="text-mi-gray">$ unlocking bootloader...</div>

                <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
                  <m.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5 }}
                    className="h-full bg-gradient-to-r from-mi-orange to-mi-orange-light"
                  />
                </div>

                <div className="text-green-400 pt-2">✔ Bootloader UNLOCKED</div>
                <div className="text-mi-gray">$ rebooting device... done.</div>
                <div className="text-white/80">› Total time: <span className="text-mi-orange font-bold">2m 14s</span></div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

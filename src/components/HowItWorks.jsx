import { m } from "../lib/motion";
import { FaShoppingCart, FaUserShield, FaUnlock, FaCheckDouble } from "react-icons/fa";

const steps = [
  {
    n: "01",
    icon: FaShoppingCart,
    title: "Choose your plan",
    desc: "Pick a rental window — 1, 3 or 7 days — based on how long you need access to a verified Mi account.",
    color: "from-mi-orange to-mi-orange-light",
  },
  {
    n: "02",
    icon: FaUserShield,
    title: "Get account credentials",
    desc: "We instantly share a fully unlocked, eligible Mi account that has already passed Xiaomi's 7-day waiting period.",
    color: "from-mi-purple to-pink-500",
  },
  {
    n: "03",
    icon: FaUnlock,
    title: "Run the unlock tool",
    desc: "Sign in to Mi Unlock on your PC, connect your phone in fastboot, and click unlock — done in under 3 minutes.",
    color: "from-mi-cyan to-blue-500",
  },
  {
    n: "04",
    icon: FaCheckDouble,
    title: "Sign out & enjoy",
    desc: "Logout from the Mi account, flash your custom ROM, root or recovery — your device, your rules.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-mi-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-mi-purple/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
            How it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Unlock in <span className="text-gradient-orange">4 simple steps</span>
          </h2>
          <p className="mt-4 text-mi-gray text-base sm:text-lg">
            From payment to unlocked device — no waiting period, no risk to your own Mi account.
          </p>
        </m.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <m.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-2xl p-6 hover:border-mi-orange/40 transition-all hover:-translate-y-2 duration-300 overflow-hidden">
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                      <s.icon className="text-white text-xl" />
                    </div>
                    <span className="text-5xl font-black text-white/5">{s.n}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-mi-gray leading-relaxed">{s.desc}</p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-mi-orange/50 to-transparent" />
              )}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

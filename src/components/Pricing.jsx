import { m } from "../lib/motion";
import { FaCheck, FaArrowRight, FaCrown } from "react-icons/fa";
import { WHATSAPP_URL } from "../data/contact";

const plans = [
  {
    name: "Account Rental",
    duration: "Self-service",
    price: "2,499",
    desc: "For users who already know how to unlock — just need a verified Mi account.",
    features: [
      "1 verified, eligible Mi account",
      "Skip the 7-day Xiaomi wait",
      "Unlock 1 device",
      "Setup guide PDF + video",
      "Email & chat support",
      "Refund if account fails",
    ],
    accent: "from-mi-cyan to-blue-500",
    cta: "Rent Account",
  },
  {
    name: "Rental + Assistance",
    duration: "Done with you",
    price: "3,499",
    desc: "We rent the account AND walk you through the entire unlock — start to finish.",
    popular: true,
    features: [
      "Everything in Account Rental",
      "1-on-1 unlock assistance",
      "Live screen-share guidance",
      "Priority WhatsApp support",
      "Custom ROM flashing tips",
      "100% success guarantee",
    ],
    accent: "from-mi-orange to-mi-orange-light",
    cta: "Get Full Help",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-96 bg-mi-orange/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Choose how you want to <span className="text-gradient-orange">unlock</span>
          </h2>
          <p className="mt-4 text-mi-gray text-base sm:text-lg">
            Two simple options — rent the Mi account and do it yourself, or let us guide you through every step.
          </p>
        </m.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <m.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${p.popular ? "md:-translate-y-4" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-mi-orange to-mi-orange-light text-white text-xs font-bold shadow-lg shadow-mi-orange/40">
                    <FaCrown className="text-yellow-300" />
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className={`relative h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.popular
                  ? "glass-strong border-2 border-mi-orange/50 shadow-2xl shadow-mi-orange/20"
                  : "glass hover:border-white/20"
              }`}>
                {p.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-mi-orange/10 to-transparent pointer-events-none" />
                )}
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-wider text-mi-gray">
                    {p.duration}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-mi-gray">{p.desc}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white">₹{p.price}</span>
                    <span className="text-mi-gray text-sm">one-time</span>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all ${
                      p.popular
                        ? "bg-gradient-to-r from-mi-orange to-mi-orange-light text-white shadow-lg shadow-mi-orange/40 hover:scale-105"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    {p.cta}
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </a>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-mi-gray">
                        <span className={`shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center mt-0.5`}>
                          <FaCheck className="text-white text-[10px]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-mi-gray">
          🔒 Secure checkout via UPI, PhonePe, Paytm, Net Banking or card — instant refund if your device isn't supported.
        </p>
      </div>
    </section>
  );
}

import { m } from "../lib/motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Rahul Sharma", role: "Custom ROM enthusiast", color: "from-mi-orange to-pink-500",
    text: "Saved me a whole week of waiting. Got the credentials in seconds and unlocked my Poco F5 instantly. Worth every rupee." },
  { name: "Priya Verma", role: "Repair shop owner", color: "from-mi-purple to-indigo-500",
    text: "I run a phone repair shop and unlock 4-5 Xiaomi phones a week. The 7-day reseller plan pays for itself in a single morning." },
  { name: "Daniel Chen", role: "Mobile developer", color: "from-mi-cyan to-blue-500",
    text: "Smooth, professional, and the support team actually replies on Telegram within minutes. Will use again for sure." },
  { name: "Aisha Khan", role: "Redmi Note 13 user", color: "from-emerald-500 to-green-500",
    text: "Was scared of bricking my phone but they walked me through every step. Took less than 5 minutes total." },
  { name: "Marco Rossi", role: "Tech YouTuber", color: "from-fuchsia-500 to-rose-500",
    text: "Tested 6 different services for a video — MiUnlock was easily the fastest and cleanest experience." },
  { name: "Sneha Gupta", role: "Android tinkerer", color: "from-amber-500 to-orange-600",
    text: "Loved that I could use the same rented account for both my old Mi A2 and new Redmi. Such good value." },
];

const initials = (name) => name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
            Reviews
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Loved by <span className="text-gradient-orange">25,000+</span> users
          </h2>
          <p className="mt-4 text-mi-gray text-base sm:text-lg">
            Real feedback from real Xiaomi users who unlocked the easy way.
          </p>
        </m.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <m.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-mi-orange/40 transition-all hover:-translate-y-1 duration-300"
            >
              <FaQuoteLeft className="text-mi-orange/40 text-2xl mb-3" />
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">"{r.text}"</p>

              <div className="flex gap-1 mt-4" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, k) => (
                  <FaStar key={k} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-sm font-bold ring-2 ring-mi-orange/20 shrink-0`}
                  aria-hidden="true"
                >
                  {initials(r.name)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-xs text-mi-gray">{r.role}</div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { m } from "../lib/motion";

const items = [
  { v: "25K+", l: "Devices unlocked" },
  { v: "120s", l: "Avg unlock time" },
  { v: "99.8%", l: "Success rate" },
  { v: "4.9★", l: "User rating" },
  { v: "24/7", l: "Live support" },
];

export default function StatsBar() {
  return (
    <section className="relative py-10 border-y border-white/5 bg-mi-dark-2/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {items.map((s, i) => (
            <m.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-orange">
                {s.v}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-mi-gray uppercase tracking-wider">
                {s.l}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

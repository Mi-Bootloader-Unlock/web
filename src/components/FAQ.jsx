import { useState } from "react";
import { m, AnimatePresence } from "../lib/motion";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    q: "Is renting a Mi account safe for my phone?",
    a: "Yes — completely. We use the official Xiaomi Mi Unlock Tool. The rented account only signs you into the unlock service; it never touches your personal data, Google account, or files on the device.",
  },
  {
    q: "Why not just use my own Mi account?",
    a: "Xiaomi forces a 7-day waiting period (sometimes 15+ days for newer devices) after binding your own account. Renting a pre-aged, eligible account skips that wait entirely.",
  },
  {
    q: "Which devices are supported?",
    a: "All Mi, Redmi and POCO devices that officially support Mi Unlock — including HyperOS, MIUI 14, MIUI 13 and older. Just message us your model before buying if unsure.",
  },
  {
    q: "What happens if my unlock fails?",
    a: "If the rented account doesn't work for any reason on a supported device, we either swap you to a fresh account immediately or issue a full refund — your choice.",
  },
  {
    q: "Will I get banned by Xiaomi?",
    a: "No. The unlock is a normal, supported Xiaomi flow. Once you sign out of the rented account and back into yours, your phone behaves normally — including OTA updates.",
  },
  {
    q: "How fast is the delivery?",
    a: "Account credentials are emailed within 60 seconds of payment, 24/7. Most users finish the entire bootloader unlock in under 5 minutes from purchase.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-mi-orange/10 text-mi-orange text-xs font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Got <span className="text-gradient-orange">questions?</span>
          </h2>
          <p className="mt-4 text-mi-gray">Everything you need to know before renting.</p>
        </m.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <m.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold text-white text-sm sm:text-base">{f.q}</span>
                <m.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-mi-orange/10 flex items-center justify-center text-mi-orange"
                >
                  <FaPlus className="text-xs" />
                </m.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-mi-gray leading-relaxed">
                      {f.a}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

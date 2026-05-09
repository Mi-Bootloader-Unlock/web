import { m } from "../lib/motion";
import { FaArrowRight, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_NUMBER, TELEGRAM_URL, TELEGRAM_HANDLE } from "../data/contact";
import ctaBg from "../assets/images/cta-background.webp";
import ctaPhone from "../assets/images/cta-phone.webp";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mi-dark via-mi-dark/90 to-mi-dark/60" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-mi-orange/40 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-mi-purple/30 rounded-full blur-3xl animate-blob [animation-delay:3s]" />

          <div className="relative px-6 sm:px-12 lg:px-16 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to unlock your{" "}
                <span className="text-gradient-orange">Mi device?</span>
              </h2>
              <p className="mt-4 text-mi-gray text-base sm:text-lg max-w-xl">
                Join thousands of users who skipped the wait. Pay once, get instant access,
                unlock in minutes — and start customizing the way you want.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-mi-orange to-mi-orange-light text-white font-semibold shadow-xl shadow-mi-orange/40 hover:scale-105 transition"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-strong hover:bg-white/10 text-white font-semibold transition"
                >
                  <FaTelegram className="text-sky-400" /> Join Telegram Group
                </a>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-mi-gray">
                <span>
                  <FaWhatsapp className="inline text-green-400 mr-1.5" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-mi-orange transition">
                    {WHATSAPP_NUMBER}
                  </a>
                </span>
                <span>
                  <FaTelegram className="inline text-sky-400 mr-1.5" />
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-mi-orange transition">
                    {TELEGRAM_HANDLE}
                  </a>
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-mi-orange/20 rounded-3xl blur-2xl" />
              <img
                src={ctaPhone}
                width="640"
                height="360"
                alt="Xiaomi phone held in hand"
                loading="lazy"
                decoding="async"
                className="relative w-full h-72 object-cover rounded-2xl shadow-2xl"
              />

              <m.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 flex items-center gap-3 shadow-xl hover:bg-white/10 transition"
              >
                <FaWhatsapp className="text-3xl text-green-400" />
                <div>
                  <div className="text-xs text-mi-gray">Live support</div>
                  <div className="font-bold text-white">+91 97744 50197</div>
                </div>
              </m.a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

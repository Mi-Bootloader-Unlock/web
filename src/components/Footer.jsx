import { FaBolt, FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import {
  WHATSAPP_URL, WHATSAPP_NUMBER,
  TELEGRAM_URL, TELEGRAM_HANDLE,
  INSTAGRAM_URL, INSTAGRAM_HANDLE,
} from "../data/contact";

const socials = [
  { Icon: FaWhatsapp, href: WHATSAPP_URL, label: "WhatsApp" },
  { Icon: FaTelegram, href: TELEGRAM_URL, label: "Telegram" },
  { Icon: FaInstagram, href: INSTAGRAM_URL, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-mi-dark-2/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mi-orange to-mi-orange-light flex items-center justify-center">
                <FaBolt className="text-white" />
              </div>
              <span className="text-xl font-bold">
                Mi<span className="text-mi-orange">Unlock</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-mi-gray max-w-md leading-relaxed">
              The fastest, safest way to unlock your Xiaomi bootloader. Skip the 7-day wait
              by renting a verified Mi account from us. Trusted by 25K+ users worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass hover:bg-mi-orange/20 hover:border-mi-orange/40 flex items-center justify-center transition"
                >
                  <Icon className="text-white text-sm" />
                </a>
              ))}
            </div>

            <div className="mt-5 space-y-1.5 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mi-gray hover:text-white transition">
                <FaWhatsapp className="text-green-400" />
                <span>{WHATSAPP_NUMBER}</span>
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mi-gray hover:text-white transition">
                <FaTelegram className="text-sky-400" />
                <span>{TELEGRAM_HANDLE}</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mi-gray hover:text-white transition">
                <FaInstagram className="text-pink-400" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-mi-gray">
              {["How it works", "Pricing", "Features", "Supported devices"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-mi-gray">
              {["FAQ", "Contact us", "Refund policy", "Terms of service", "Privacy"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mi-gray">
          <p>© {new Date().getFullYear()} MiUnlock. All rights reserved.</p>
          <p className="text-center">
            Not affiliated with Xiaomi Corp. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

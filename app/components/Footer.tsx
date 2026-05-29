"use client"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12.04 2C6.57 2 2.12 6.45 2.12 11.92c0 1.75.46 3.46 1.34 4.98L2 22l5.26-1.38a9.86 9.86 0 0 0 4.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92C21.97 6.45 17.52 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.29-1.93 1.37-.5.08-1.14.12-1.83-.1-.42-.14-.96-.33-1.66-.63-2.92-1.26-4.82-4.19-4.96-4.38-.14-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.47.24.56.84 1.95.92 2.1.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.79 1.31 1.69 2.13 1.16 1.04 2.13 1.37 2.44 1.52.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.31.41-.26.69-.16.28.1 1.79.84 2.09.99.3.15.5.23.58.36.08.13.08.77-.16 1.45Z" />
    </svg>
  )
}

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-md p-6 md:p-8 grid lg:grid-cols-[1fr_1.1fr] gap-7">
          <div className="text-center flex flex-col items-center">
            <p className="text-sm font-semibold text-amber-300 tracking-wider">CONTACT</p>
            <h2 className="text-4xl text-white mt-2">{t.contactUs}</h2>

            <div className="mt-6 space-y-3 text-neutral-200">
              <p>
                <span className="text-neutral-400">{t.phone}:</span>{" "}
                <a href="tel:+355685515622" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors">
                  <CallIcon />
                  <span>+355 685 515 622</span>
                </a>
              </p>
              <p>
                <span className="text-neutral-400">{t.email}:</span> elson.barxhani03@gmail.com
              </p>
              <p>
                <span className="text-neutral-400">{t.address}:</span>{" "}
                <a
                  href="https://www.google.com/maps/place/Mili+Sprinter/@41.3414,19.4764948,334m/data=!3m1!1e3!4m6!3m5!1s0x134fd77803c15fef:0x448a74e75c577959!8m2!3d41.3405675!4d19.4754572!16s%2Fg%2F11vlvrb68v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 transition-colors"
                >
                  Durres Lagja 14 Vala E Detit
                </a>
              </p>
            </div>

            <a
              href="https://wa.me/355685515622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-3 rounded-xl bg-amber-500 text-black font-extrabold hover:bg-amber-400 transition"
            >
              <WhatsAppIcon />
              {t.whatsappDirect}
            </a>
          </div>

          <div className="text-center flex flex-col items-center">
            <h3 className="text-xl text-white mb-3">{t.ourLocation}</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.0344205038127!2d19.474308300000003!3d41.3414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fd77803c15fef%3A0x448a74e75c577959!2sMili%20Sprinter!5e0!3m2!1sen!2s!4v1642777777777!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-300">
          <span className="inline-flex items-center rounded-full border border-amber-400/35 bg-black/45 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(251,146,60,0.65)]">
            © 2025 Mili Sprinter. {t.allRightsReserved}
          </span>
        </p>
      </div>
    </footer>
  )
}

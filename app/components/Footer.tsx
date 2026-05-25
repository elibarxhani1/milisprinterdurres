"use client"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl border border-white/15 bg-black/55 backdrop-blur-md p-6 md:p-8 grid lg:grid-cols-[1fr_1.1fr] gap-7">
          <div>
            <p className="text-sm font-semibold text-amber-300 tracking-wider">CONTACT</p>
            <h2 className="text-4xl text-white mt-2">{t.contactUs}</h2>

            <div className="mt-6 space-y-3 text-neutral-200">
              <p>
                <span className="text-neutral-400">{t.phone}:</span>{" "}
                <a href="tel:+355685515622" className="text-amber-300 hover:text-amber-200 transition-colors">
                  +355 685 515 622
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
              className="inline-block mt-6 px-5 py-3 rounded-xl bg-amber-500 text-black font-extrabold hover:bg-amber-400 transition"
            >
              {t.whatsappDirect}
            </a>
          </div>

          <div>
            <h3 className="text-xl text-white mb-3">{t.ourLocation}</h3>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
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

        <p className="text-center text-sm text-neutral-400 mt-6">© 2025 Mili Sprinter. {t.allRightsReserved}</p>
      </div>
    </footer>
  )
}

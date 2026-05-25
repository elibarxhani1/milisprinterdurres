"use client"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer id="contact" className="bg-black bg-opacity-50 py-8 container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">{t.contactUs}</h2>
      <p className="mb-2 text-white">
        {t.phone}:{" "}
        <a href="tel:+355685515622" className="text-blue-300 hover:text-blue-400 transition-colors">
          +355 685 515 622
        </a>
      </p>
      <p className="mb-2 text-white">{t.email}: elson.barxhani03@gmail.com</p>
      <p className="mb-4 text-white">
        {t.address}:{" "}
        <a
          href="https://www.google.com/maps/place/Mili+Sprinter/@41.3414,19.4764948,334m/data=!3m1!1e3!4m6!3m5!1s0x134fd77803c15fef:0x448a74e75c577959!8m2!3d41.3405675!4d19.4754572!16s%2Fg%2F11vlvrb68v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-400 transition-colors"
        >
          Durrës Lagja 14 Vala E Detit
        </a>
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{t.ourLocation}</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.0344205038127!2d19.474308300000003!3d41.3414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fd77803c15fef%3A0x448a74e75c577959!2sMili%20Sprinter!5e0!3m2!1sen!2s!4v1642777777777!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <p className="text-sm text-white">© 2025 Mili Sprinter. {t.allRightsReserved}</p>
    </footer>
  )
}

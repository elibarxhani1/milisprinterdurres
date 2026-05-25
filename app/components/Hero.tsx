"use client"
import type { SVGProps } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.2 18.8 19.5 19.5 0 0 1 5.2 12.8 19.86 19.86 0 0 1 2.08 4.17 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.26-1.25a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12.04 2C6.57 2 2.12 6.45 2.12 11.92c0 1.75.46 3.46 1.34 4.98L2 22l5.26-1.38a9.86 9.86 0 0 0 4.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92C21.97 6.45 17.52 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.29-1.93 1.37-.5.08-1.14.12-1.83-.1-.42-.14-.96-.33-1.66-.63-2.92-1.26-4.82-4.19-4.96-4.38-.14-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.47.24.56.84 1.95.92 2.1.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.79 1.31 1.69 2.13 1.16 1.04 2.13 1.37 2.44 1.52.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.31.41-.26.69-.16.28.1 1.79.84 2.09.99.3.15.5.23.58.36.08.13.08.77-.16 1.45Z" />
    </svg>
  )
}

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="opacity-0 reveal-up text-center">
            <div className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs md:text-sm font-semibold text-amber-200">
              {t.workshopBadge}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl leading-tight text-white">
              {t.expertService}
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">{t.yearsOfExperience}</p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/355685515622"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 px-6 rounded-xl text-base flex items-center justify-center transition"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" /> {t.contactWhatsApp}
              </a>
              <a
                href="tel:+355685515622"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-xl text-base transition"
              >
                +355 685 515 622
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg text-center mx-auto">
              <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-4">
                <p className="text-2xl text-amber-300">20+</p>
                <p className="text-xs text-white/80">{t.heroStatYearsExperience}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-4">
                <p className="text-2xl text-amber-300">100%</p>
                <p className="text-xs text-white/80">{t.heroStatGuarantee}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-4">
                <p className="text-2xl text-amber-300">24/7</p>
                <p className="text-xs text-white/80">{t.heroStatSupport}</p>
              </div>
            </div>
          </div>

          <div className="opacity-0 reveal-up reveal-delay-1">
            <div className="rounded-2xl border border-amber-400/35 bg-gradient-to-br from-orange-950/80 via-black/60 to-black/90 p-3 md:p-4 shadow-[0_24px_80px_-42px_rgba(251,146,60,0.85)]">
              <div className="flex justify-center mb-3">
                <img
                  src="/mili-sprinter-transparent.png"
                  alt="Mili Sprinter Logo"
                  className="h-auto w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
                  width={540}
                  height={216}
                />
              </div>
              <div className="rounded-xl border border-amber-400/30 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.24),transparent_42%),linear-gradient(135deg,rgba(154,52,18,0.92)_0%,rgba(10,10,10,0.92)_55%,rgba(0,0,0,0.98)_100%)] p-2 shadow-[0_18px_50px_-24px_rgba(251,146,60,0.75)]">
                <video controls className="w-full rounded-lg border border-white/10 shadow-lg">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20d755cb-694e-473d-b46c-1a282027c1f9-8dSCmtcFsX1noKTrjwcc3J9TR46MiE.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

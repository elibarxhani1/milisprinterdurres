"use client"

import Hero from "./components/Hero"
import Services from "./components/Services"
import { useLanguage } from "./contexts/LanguageContext"
import translations from "./translations"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Hero />
      <section className="pb-14 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 text-center">
              <p className="text-amber-300 text-sm">{t.proofFastTitle}</p>
              <p className="text-white text-lg mt-1">{t.proofFastDesc}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 text-center">
              <p className="text-amber-300 text-sm">{t.proofTransparentTitle}</p>
              <p className="text-white text-lg mt-1">{t.proofTransparentDesc}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 text-center">
              <p className="text-amber-300 text-sm">{t.proofSprinterTitle}</p>
              <p className="text-white text-lg mt-1">{t.proofSprinterDesc}</p>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </>
  )
}

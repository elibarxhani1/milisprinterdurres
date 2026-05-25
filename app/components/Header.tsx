"use client"
import { useState, useEffect, type SVGProps } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const languageFlags = {
    sq: "🇦🇱",
    en: "🇬🇧",
    it: "🇮🇹",
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const changeLanguage = (lang: "en" | "sq" | "it") => {
    setLanguage(lang)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  return (
    <header className="fixed w-full z-30 px-3 md:px-6 pt-3 md:pt-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-amber-500/30 bg-black/70 backdrop-blur-md shadow-[0_18px_65px_-28px_rgba(251,146,60,0.9)]">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <a href="/" className="text-2xl md:text-3xl tracking-wide leading-none text-white">
            Mili <span className="text-amber-400">Sprinter</span>
          </a>

          <nav className="hidden md:flex items-center gap-3 text-sm font-semibold">
            <button
              onClick={() => scrollToSection("services")}
              className="px-3 py-2 rounded-lg text-white/85 hover:text-amber-300 hover:bg-white/5 transition"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-2 rounded-lg text-white/85 hover:text-amber-300 hover:bg-white/5 transition"
            >
              {t.contact}
            </button>
            <a
              href="https://wa.me/355685515622"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-amber-500 text-black font-bold hover:bg-amber-400 transition"
            >
              WhatsApp
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => changeLanguage("sq")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${language === "sq" ? "bg-amber-500 text-black" : "text-white/80 hover:text-white"}`}
            >
              <span aria-hidden="true">{languageFlags.sq}</span>
              SQ
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${language === "en" ? "bg-amber-500 text-black" : "text-white/80 hover:text-white"}`}
            >
              <span aria-hidden="true">{languageFlags.en}</span>
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${language === "it" ? "bg-amber-500 text-black" : "text-white/80 hover:text-white"}`}
            >
              <span aria-hidden="true">{languageFlags.it}</span>
              IT
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg border border-white/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>

          {isMenuOpen && (
            <nav className="absolute top-[72px] left-3 right-3 rounded-2xl border border-amber-500/25 bg-neutral-950/95 py-3 px-3 shadow-2xl md:hidden">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-sm rounded-lg text-white hover:bg-white/5"
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-sm rounded-lg text-white hover:bg-white/5"
              >
                {t.contact}
              </button>
              <a
                href="https://wa.me/355685515622"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center px-3 py-2 rounded-lg bg-amber-500 text-black font-bold"
              >
                WhatsApp
              </a>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <button
                  onClick={() => changeLanguage("sq")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs ${language === "sq" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <span aria-hidden="true">{languageFlags.sq}</span>
                  Shqip
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs border border-amber-400/60 ${language === "en" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <span aria-hidden="true">{languageFlags.en}</span>
                  English
                </button>
                <button
                  onClick={() => changeLanguage("it")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs border border-amber-400/60 ${language === "it" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <span aria-hidden="true">{languageFlags.it}</span>
                  Italiano
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

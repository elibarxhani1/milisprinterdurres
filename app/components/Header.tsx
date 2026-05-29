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

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12.04 2C6.57 2 2.12 6.45 2.12 11.92c0 1.75.46 3.46 1.34 4.98L2 22l5.26-1.38a9.86 9.86 0 0 0 4.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92C21.97 6.45 17.52 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.29-1.93 1.37-.5.08-1.14.12-1.83-.1-.42-.14-.96-.33-1.66-.63-2.92-1.26-4.82-4.19-4.96-4.38-.14-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.47.24.56.84 1.95.92 2.1.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.79 1.31 1.69 2.13 1.16 1.04 2.13 1.37 2.44 1.52.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.31.41-.26.69-.16.28.1 1.79.84 2.09.99.3.15.5.23.58.36.08.13.08.77-.16 1.45Z" />
    </svg>
  )
}

function FlagIcon({ code, className }: { code: "sq" | "en" | "it"; className?: string }) {
  if (code === "sq") {
    return (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
        <rect width="24" height="16" fill="#d11f2a" />
        <path d="M12 4.2 10.7 6h2.6L12 4.2Zm-2.9 2.4.8 1.3h4.2l.8-1.3h-5.8Zm1 2 1.2 2h1.4l1.2-2h-3.8Z" fill="#111" />
      </svg>
    )
  }

  if (code === "it") {
    return (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
        <rect width="8" height="16" x="0" fill="#009246" />
        <rect width="8" height="16" x="8" fill="#ffffff" />
        <rect width="8" height="16" x="16" fill="#ce2b37" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#ffffff" strokeWidth="3" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" strokeWidth="1.4" />
      <path d="M12 0v16M0 8h24" stroke="#ffffff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.8" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

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
              <FlagIcon code="sq" className="h-3.5 w-5 rounded-[2px]" />
              SQ
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${language === "en" ? "bg-amber-500 text-black" : "text-white/80 hover:text-white"}`}
            >
              <FlagIcon code="en" className="h-3.5 w-5 rounded-[2px]" />
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${language === "it" ? "bg-amber-500 text-black" : "text-white/80 hover:text-white"}`}
            >
              <FlagIcon code="it" className="h-3.5 w-5 rounded-[2px]" />
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
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 py-2 font-bold text-black"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <button
                  onClick={() => changeLanguage("sq")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs ${language === "sq" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <FlagIcon code="sq" className="h-3.5 w-5 rounded-[2px]" />
                  Shqip
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs border border-amber-400/60 ${language === "en" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <FlagIcon code="en" className="h-3.5 w-5 rounded-[2px]" />
                  English
                </button>
                <button
                  onClick={() => changeLanguage("it")}
                  className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs border border-amber-400/60 ${language === "it" ? "bg-amber-500 text-black" : "bg-white/5 text-white/80"}`}
                >
                  <FlagIcon code="it" className="h-3.5 w-5 rounded-[2px]" />
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

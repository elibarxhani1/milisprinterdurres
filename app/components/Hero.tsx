"use client"
import type { SVGProps } from "react"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.2 18.8 19.5 19.5 0 0 1 5.2 12.8 19.86 19.86 0 0 1 2.08 4.17 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.26-1.25a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-8 md:py-12 text-center relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46DD1C42-9D1D-4F3A-A076-65048EF7E450-alfnLGdyKFxc79cXhSQoo8tkBH0v5a.png"
            alt="Mili Sprinter Logo"
            width={350}
            height={140}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">{t.expertService}</h1>
        <p className="text-lg md:text-xl mb-6 text-black">{t.yearsOfExperience}</p>
        <div className="mb-8">
          <video controls className="w-full max-w-3xl mx-auto rounded-lg shadow-lg">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20d755cb-694e-473d-b46c-1a282027c1f9-8dSCmtcFsX1noKTrjwcc3J9TR46MiE.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-center">
          <a
            href="https://wa.me/355685515622"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center shadow-lg"
          >
            <PhoneIcon className="mr-2 h-5 w-5" /> {t.contactWhatsApp}
          </a>
        </div>
      </div>
    </section>
  )
}

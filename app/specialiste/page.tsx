"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-4 w-4" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.37_a0021327.jpg-MFXlnbipN1gWuJMTbNgfK53skLjZCR.jpeg",
    alt: "Classic Mercedes Sprinter Van",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.56_ee9c74a1.jpg-97mIBTb5gG6akzJ5NocI4wSi70PeeH.jpeg",
    alt: "Modern Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.21.01_b3fe8fcc.jpg-YACS1KueG8i6FIjSjRtf92wM2xw6D0.jpeg",
    alt: "Hartmann Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.20.32_39adc6ed.jpg-9LjwgHHJASEzNgf3wOX1KTZgnjymfn.jpeg",
    alt: "Utility Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.37_9cd71636.jpg-MsKDk7RuZKaCU6TaA9S7KieVVzVxI1.jpeg",
    alt: "Westfalia Mercedes Sprinter",
  },
]

export default function SpecialistePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white pt-24 md:pt-28">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white bg-black/45 border border-amber-400/40 hover:bg-amber-500/15 hover:text-amber-200">
              <BackIcon />
              {t.goBack}
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">{t.sprinterSpecialistsTitle}</h1>

        <div className="max-w-3xl mx-auto mb-8 text-center">
          <p className="text-lg mb-4">{t.sprinterSpecialistsIntro}</p>
          <ul className="space-y-2 mb-8">
            <li>{t.sprinterSpecialistsService1}</li>
            <li>{t.sprinterSpecialistsService2}</li>
            <li>{t.sprinterSpecialistsService3}</li>
            <li>{t.sprinterSpecialistsService4}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

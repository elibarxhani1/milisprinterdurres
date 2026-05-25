"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  )
}

export default function RiparimeElektrike() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/176888b4-432b-4996-905c-2588f84eaafe-8R6OgDXJdvMt61WOVj4r7MqJpwwDNt.jpeg",
      alt: "SAM Module Circuit Board",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3630d90f-8299-4ed7-8c2e-bba95b452572-UuZPFRA08S1vkJZ0qca8DiyEMKQ7Yc.jpeg",
      alt: "ECU Back Cover",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/303ac79a-2837-4f45-9d89-c207b3c208a3-NdQnwOYMEXMi38ptN6zAs0glmHDDX3.jpeg",
      alt: "Circuit Board Components",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d77e7e9-6884-4fd7-ae7f-ce0959f1d22b-liZk93LNdp94lK69m6RyyqJHFQ5p7C.jpeg",
      alt: "Detailed Circuit View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3065fbb5-b96a-4ebb-a7d4-53723061c7c6-8MjAUK9rhyugOtyGEMRT5gPnOzCZDs.jpeg",
      alt: "Integrated Circuits",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0c9b4733-9a86-490f-b403-4355da46e477-1Y9fzRyDRSTTSpQbJqshxXPoDEj3q1.jpeg",
      alt: "Circuit Board Edge",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8064bc04-7fae-46f4-b0d7-50f2e9398c10-PeJ0p9VC64w2AN12Lcfr6r5AeX95mK.jpeg",
      alt: "Component Close-up",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20d271e9-f231-473d-9ebb-bb4cc5f51bb6-SHzJseVAY5BNepW1fyXELn7Gg01aXv.jpeg",
      alt: "Circuit Detail",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a58eb116-19b5-4db7-9d17-a8964daf6d17-pevqMOwIRy3foo9SA5U8pOdrHEJw6B.jpeg",
      alt: "PCB Edge View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f554786b-f998-43a5-9c7e-1c2e58498662-7viiPTZBovlV1tLandolzuVvybKGz4.jpeg",
      alt: "Detailed Component View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e308a03b-6a19-4e11-b5e3-93e85191cef4-eRsrgZtBQaqGC7ERtVLB5d6oVtFAoW.jpeg",
      alt: "Circuit Module Front View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eaae1f7d-4761-49f7-b674-720b188832c8-uZ7H3bogcnYNA9f0aIkHPqfuRM9F2T.jpeg",
      alt: "Circuit Module Back View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.33.56_f4df2f28.jpg-Bq32psu0qxi2dJ0F0yS0Bo0MOwRS9K.jpeg",
      alt: "Mercedes Sprinter Alternators",
    },
  ]

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

        <h1 className="text-4xl font-bold mb-8 text-center">{t.electricalRepairsTitle}</h1>

        <div className="max-w-3xl mx-auto mb-8 text-center">
          <p className="text-lg mb-4">{t.electricalRepairsIntro}</p>
          <ul className="space-y-2 mb-8">
            <li>{t.electricalRepairsService1}</li>
            <li>{t.electricalRepairsService2}</li>
            <li>{t.electricalRepairsService3}</li>
            <li>{t.electricalRepairsService4}</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">{t.repairProcess}</h2>
          <div className="relative rounded-xl border border-amber-400/45 bg-[linear-gradient(135deg,rgba(154,52,18,0.88)_0%,rgba(10,10,10,0.95)_55%,rgba(0,0,0,1)_100%)] p-2 shadow-[0_18px_50px_-24px_rgba(251,146,60,0.8)] overflow-hidden">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-full border border-amber-300/50 bg-black/75 px-3 py-2 text-amber-100 shadow-lg backdrop-blur-sm hover:bg-amber-500/20 hover:text-white md:right-4 md:top-4 md:px-4 md:py-3"
              onClick={() => setSelectedVideo("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-01-26%20at%2023.30.22-ZoATCCwtOC9xnAcPyipz8QVEWhqaEs.mp4")}
              aria-label="Open video fullscreen"
              title="Open video fullscreen"
            >
              <ExpandIcon />
              <span className="text-xs font-semibold md:text-sm">{t.expandVideo}</span>
            </button>
            <video controls className="w-full max-h-[70vh] mx-auto rounded-lg border border-white/10" playsInline preload="metadata">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-01-26%20at%2023.30.22-ZoATCCwtOC9xnAcPyipz8QVEWhqaEs.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group border border-amber-400/35 bg-[linear-gradient(135deg,rgba(154,52,18,0.75)_0%,rgba(10,10,10,0.88)_55%,rgba(0,0,0,1)_100%)] p-1 shadow-[0_18px_50px_-24px_rgba(251,146,60,0.75)]"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-3 top-3 md:right-4 md:top-4 z-50 rounded-full border border-amber-300/40 bg-black/70 p-3 text-white shadow-lg hover:bg-amber-500/20 hover:text-amber-200"
              onClick={() => setSelectedImage(null)}
              type="button"
            >
              <CloseIcon />
            </button>
            <div className="relative w-full max-w-5xl max-h-[90vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                quality={100}
              />
            </div>
          </div>
        )}

        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute right-3 top-3 md:right-4 md:top-4 z-50 rounded-full border border-amber-300/40 bg-black/70 p-3 text-white shadow-lg hover:bg-amber-500/20 hover:text-amber-200"
              onClick={() => setSelectedVideo(null)}
              type="button"
            >
              <CloseIcon />
            </button>
            <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-amber-400/40 bg-[linear-gradient(135deg,rgba(154,52,18,0.88)_0%,rgba(10,10,10,0.95)_55%,rgba(0,0,0,1)_100%)] p-3 shadow-[0_24px_80px_-42px_rgba(251,146,60,0.85)]" onClick={(event) => event.stopPropagation()}>
              <video controls autoPlay className="w-full max-h-[88vh] rounded-xl border border-white/10" playsInline preload="metadata">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

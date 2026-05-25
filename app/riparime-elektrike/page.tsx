"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

export default function RiparimeElektrike() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-blue-300">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">{t.electricalRepairsTitle}</h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg mb-4">{t.electricalRepairsIntro}</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>{t.electricalRepairsService1}</li>
            <li>{t.electricalRepairsService2}</li>
            <li>{t.electricalRepairsService3}</li>
            <li>{t.electricalRepairsService4}</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.repairProcess}</h2>
          <div className="relative rounded-lg overflow-hidden bg-black">
            <video controls className="w-full max-h-[70vh] mx-auto" playsInline preload="metadata">
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
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
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
              className="absolute top-4 right-4 text-white hover:text-blue-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
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
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

export default function SherbimeMekanike() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.18.51_b2df3ffd.jpg-IuWJKFr9v3xZH4d2ajTvbLnjigFnqr.jpeg",
      alt: "Engine Removal Process - Complete engine assembly being serviced",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.20.56_ac689dc4.jpg-I1VuebhjWuLjJ9CIrkr3YJyY8Dm2G0.jpeg",
      alt: "Camshaft Assembly - Detailed view of engine camshafts and timing components",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.20.56_16f2cdc3.jpg-AbsWfbfGwSDUw4C8pUcMzwZXW1vTi1.jpeg",
      alt: "Engine Timing Marks - Close-up of timing alignment marks",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.28.53_23ead48a.jpg-gX25dTXcWfXuRq8NeHh0iTpnpHXBey.jpeg",
      alt: "Engine Cooling System - Fan assembly and cooling components",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.28.53_cfc62bce.jpg-zGfDwFuBphp8Ykfn403RJDxS2L1E78.jpeg",
      alt: "Transmission Assembly - Complete view of transmission system",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.23.56_56f12cc1.jpg-xAXJnFXR1atIFyp7XJHxTuaYZ5aJpC.jpeg",
      alt: "Injector System - Detailed view of engine injectors",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.20.56_92c6bac5.jpg-2varDwQtpuMe8JuvDsKVFH0C0UBR9R.jpeg",
      alt: "Engine Timing Components - Detailed view of timing mechanism",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-26%20%C3%A0%2023.20.56_fc97c08e.jpg-J68EQ4WjMKJSOX6FPdj7T02g5Zq0aF.jpeg",
      alt: "Timing Chain and Gears - Close-up of timing chain mechanism",
    },
  ]

  const videos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.24.19_08b287e3-ZCjJUuJ9QyuP5UBKv8nW6TnJvnwwDI.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-27%20%C3%A0%2000.02.15_7898ac72-WZuSpCb8ViJFKkCfxg8irJGyUAhFDD.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.20.08_c22b3a86-4t8BEM46jSkhgjFGhwF9aEF1xhcKRT.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.23.19_50eb9ac1-gJOqoCEYtGJq0Q7OGogUt7yaz4lGeJ.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.29.46_d84e23a8-aFB8o8CrWQ5vFgKHKUzrAvcCQH7Mzr.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-27%20%C3%A0%2000.02.13_c2876db1-0CZnfXaCV9vBXN9LaBArw6h4kYTx97.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.21.48_da8aac1c-JEb7vnLJ8ddubSbKfk2XHq52LELqfP.mp4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Vid%C3%A9o%202025-01-26%20%C3%A0%2023.45.27_4eded113-r7GQIt5DwTdPwhi8qjJc7hfHts0Fwt.mp4",
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

        <h1 className="text-4xl font-bold mb-8 text-center">{t.mechanicalServicesTitle}</h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg mb-4">{t.mechanicalServicesIntro}</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>{t.mechanicalServicesService1}</li>
            <li>{t.mechanicalServicesService2}</li>
            <li>{t.mechanicalServicesService3}</li>
            <li>{t.mechanicalServicesService4}</li>
            <li>{t.mechanicalServicesService5}</li>
          </ul>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.videoRepairDemonstrations}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video controls className="w-full h-full" playsInline preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.repairProcessPhotos}</h2>
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

"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.56_ee9c74a1.jpg-WDcHvo8Scq9TuU85HVbNvQ9Dya77Qa.jpeg",
    alt: "Modern Mercedes Sprinter Van",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.37_a0021327.jpg-wQCkPx3YuqpGK3ulJMJmvK3KTrsaHI.jpeg",
    alt: "Classic Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.21.01_b3fe8fcc.jpg-lbs0mkaQ0nYki0qOOsQxMRT6KjHmDM.jpeg",
    alt: "Hartmann Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.20.32_39adc6ed.jpg-RkJSwKKAvIIcpre442xcgO8czycs7H.jpeg",
    alt: "Utility Mercedes Sprinter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20%C3%A0%2000.19.37_9cd71636.jpg-0EBjnV2fdIzzl11Csqh8ClQWNYRmEo.jpeg",
    alt: "Westfalia Mercedes Sprinter",
  },
]

export function SprinterCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full rounded-lg"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

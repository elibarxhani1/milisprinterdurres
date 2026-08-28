import "./globals.css"
import type { Metadata } from "next"
import Image from "next/image"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { LanguageProvider } from "./contexts/LanguageContext"
import type React from "react"

export const metadata: Metadata = {
  title: "Mili Sprinter",
  description: "Shërbim Ekspert për Mercedes Sprinter në Shqiperi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq">
      <body className="font-sans">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col relative">
            <div className="fixed inset-0 -z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1809-5pxAb7eXWdjNnu9yJ1UsLSNLTm8C1T.png"
                alt="Background"
                fill
                priority
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

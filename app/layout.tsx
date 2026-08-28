import "./globals.css"
import type { Metadata } from "next"
import { Oswald, Nunito_Sans } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { LanguageProvider } from "./contexts/LanguageContext"
import type React from "react"

const headingFont = Oswald({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Nunito_Sans({ subsets: ["latin"], variable: "--font-body" })

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
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col relative bg-neutral-950 text-neutral-100 overflow-hidden">
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

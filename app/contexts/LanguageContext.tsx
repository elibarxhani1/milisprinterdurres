"use client"

import type React from "react"
import { createContext, useEffect, useState, useContext, type ReactNode } from "react"

type Language = "en" | "sq" | "it"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("sq")

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("mili-sprinter-language") as Language | null

    if (storedLanguage === "en" || storedLanguage === "sq" || storedLanguage === "it") {
      setLanguage(storedLanguage)
      document.documentElement.lang = storedLanguage
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("mili-sprinter-language", language)
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

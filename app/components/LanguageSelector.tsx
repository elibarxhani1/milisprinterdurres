"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const languages = [
  { code: "sq", name: "Shqip" },
  { code: "it", name: "Italiano" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
]

export function LanguageSelector() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === router.locale) || languages[0],
  )

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    router.push(router.pathname, router.asPath, { locale: language.code })
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedLanguage.name}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className={cn(
                  "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left",
                  {
                    "bg-gray-100 text-gray-900": selectedLanguage.code === language.code,
                  },
                )}
                role="menuitem"
                onClick={() => selectLanguage(language)}
              >
                {language.name}
                {selectedLanguage.code === language.code && <Check className="ml-auto h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

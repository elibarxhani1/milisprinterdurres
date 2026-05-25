"use client"
import type { SVGProps } from "react"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import translations from "../translations"

function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a5 5 0 0 0 3 7.4L9 22l-3-3 8.3-8.7a5 5 0 0 0 7.4-3 5 5 0 0 1-7-1z" />
      <path d="M4 20l2 2" />
    </svg>
  )
}

function BatteryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
      <line x1="14" y1="10" x2="14" y2="14" />
    </svg>
  )
}

function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="1" y="5" width="14" height="10" rx="1" />
      <path d="M15 8h4l3 3v4h-7z" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  )
}

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: t.electricalRepairs,
      description: t.electricalRepairsDesc,
      icon: BatteryIcon,
      link: "/riparime-elektrike",
    },
    {
      title: t.mechanicalServices,
      description: t.mechanicalServicesDesc,
      icon: WrenchIcon,
      link: "/sherbime-mekanike",
    },
    {
      title: t.sprinterSpecialists,
      description: t.sprinterSpecialistsDesc,
      icon: TruckIcon,
      link: "/specialiste",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.ourServices}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

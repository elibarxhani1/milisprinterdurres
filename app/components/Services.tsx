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
    <section id="services" className="pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="opacity-0 reveal-up reveal-delay-2 text-center mb-10">
          <p className="text-amber-300 text-sm font-semibold tracking-wider">{t.servicesEyebrow}</p>
          <h2 className="text-4xl md:text-5xl text-white mt-2">{t.ourServices}</h2>
          <p className="text-neutral-300 mt-3 max-w-2xl mx-auto">
            {t.servicesSectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="h-full rounded-2xl border border-white/15 bg-gradient-to-b from-white/8 to-white/3 p-6 text-center hover:border-amber-400/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="mx-auto w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/35 flex items-center justify-center mb-5">
                  <service.icon className="block w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{service.description}</p>
                <p className="mt-5 text-sm font-bold text-amber-300">{t.learnMore} {'->'}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

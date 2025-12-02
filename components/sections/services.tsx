"use client"

import { Palette, ImageIcon, Pencil, Code, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Custom logo design that captures your brand identity. From concept to final files, I create memorable marks that stand out.",
  },
  {
    icon: ImageIcon,
    title: "Poster & Thumbnail Design",
    description:
      "Eye-catching designs for social media, YouTube thumbnails, and print materials that grab attention and convert.",
  },
  {
    icon: Pencil,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive interfaces that are beautiful, accessible, and user-friendly.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Responsive, fast, and SEO-optimized websites built with modern technologies. From landing pages to complex applications.",
  },
  {
    icon: Zap,
    title: "Full-Stack App Development",
    description:
      "End-to-end application development with frontend, backend, and database. Scalable solutions for your business needs.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive design and development services to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover-lift hover:border-primary/50 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

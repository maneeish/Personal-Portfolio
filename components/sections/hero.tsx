"use client"

import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 min-h-[calc(100vh-120px)] flex-center">
          {/* Hero Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">Manish Mandal</h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold">Graphic Designer & Developer</p>
            </div>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, functional digital experiences. I blend creative design with robust development to
              bring ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center pt-8">
              <a href="https://github.com/maneeish" className="p-3 rounded-lg hover:bg-muted transition-colors group">
                <Github size={24} className="text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/manish-mandal-6b7212295/" className="p-3 rounded-lg hover:bg-muted transition-colors group">
                <Linkedin size={24} className="text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-lg hover:bg-muted transition-colors group">
                <Instagram size={24} className="text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <ArrowDown size={24} className="text-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

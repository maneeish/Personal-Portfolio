"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Services from "@/components/sections/services"
import Resume from "@/components/sections/resume"
import Contact from "@/components/sections/contact"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <Navigation />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

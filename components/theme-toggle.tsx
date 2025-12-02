"use client"

import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-6 z-40 p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
    </button>
  )
}

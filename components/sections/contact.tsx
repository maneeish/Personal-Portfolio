"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real scenario, this would send the form data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/manish-mandal-6b7212295/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/maneeish", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/maneish02/", label: "Instagram" },
    { icon: Mail, href: "mailto:maneeish09@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Manish"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Connect With Me</h3>
              <p className="text-foreground/60">
                Feel free to reach out through any of these platforms. I'm always excited to discuss new projects and
                opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                )
              })}
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-foreground/70 text-sm">
                <span className="font-semibold text-foreground">Response Time:</span> I typically respond within 2
                hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Manish Mandal. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

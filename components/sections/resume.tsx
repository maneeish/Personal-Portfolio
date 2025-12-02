"use client"

import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Galgotias University",
    year: "2022 - 2026",
    details: "Specialization in Web Technologies and AI",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Chai Code",
    year: "2025",
    details: "Intensive 4 Months program",
  },
]

const skills = {
  design: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Adobe Premiere", "UI/UX Design"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"],
  tools: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Jira"],
}

const experience = [
  {
    role: "Graphic Design Intern",
    company: "Dynamic Marketing",
    period: "2025",
    description: "Created social media graphics and branding assets for 20+ clients",
  },
]

const certifications = [
  "Full-Stack Web Development - Chai Code",
  "Java By Oracle",
  "The Complete 2023 Web Development Bootcamp - Udemy",
]

export default function Resume() {
  
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Manish_Mandal_Resume.pdf"  
    link.download = "Manish-Mandal-Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Resume</h2>
            <p className="text-foreground/60">Experience, Education & Skills</p>
          </div>

          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Resume Content */}
        <div className="space-y-12">

          {/* Experience */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground/50 whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-foreground/50 whitespace-nowrap ml-4">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="p-6 rounded-lg border border-border bg-card/50">
                  <h4 className="font-bold text-foreground mb-4 capitalize">
                    {category === "frontend"
                      ? "Frontend"
                      : category === "backend"
                      ? "Backend"
                      : category === "design"
                      ? "Design"
                      : "Tools"}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Book Library",
    description: "A simple and responsive web app to browse, view, and paginate through book listings with list and grid view options..",
    image: "/2.png",
    tags: ["Html", "Javascript", "API", "CSS"],
    type: "coding",
    links: { demo: "https://book-library-one-murex.vercel.app/", github: "https://github.com/maneeish/Book-Library" },
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and design guidelines.",
    image: "/5.jpg",
    tags: ["Figma", "Branding", "UI Design"],
    type: "design",
    links: { demo: "https://drive.google.com/drive/folders/1z0X925qez4nHc4Cn36ZT8Sj0QFOs00WY?usp=sharing" },
  },
  {
    id: 3,
    title: "AI Assistant Dashboard",
    description: "Interactive dashboard for AI Assistant application with user-friendly interface and data visualization.",
    image: "/4.png",
    tags: ["Figma", "Adobe Xd", "Design", "UI/UX"],
    type: "UI/UX",
    links: { demo: "https://www.figma.com/design/RwxVDSvKtxkQ7HqgwCCwlK/AI-Assistant?node-id=0-1&t=e3V8FrvMEGntxOju-1" },
  },
  {
    id: 4,
    title: "Social Media Campaign",
    description: "Creative social media design package with multiple graphics and animations for brand promotion.",
    image: "/8.jpg",
    tags: ["Adobe Suite", "Animation", "Social Design"," Marketing","Corel Draw"],
    type: "design",
    links: { demo: "https://drive.google.com/drive/folders/1lCjDvMGLoQpQWTmRFTM4DJoAqHJS69V6?usp=sharing", github: "#" },
  },
  {
    id: 5,
    title: "AI Flashcard Generator",
    description: "An AI-powered app that generates smart flashcards from PDFs using GPT for fast and effective learnings.",
    image: "/1.png",
    tags: ["Python", "NLP", "Streamlit"],
    type: "coding",
    links: { demo: "https://flashcardgenerator23.streamlit.app/", github: "https://github.com/maneeish/flashcardgenerator" },
  },
  {
    id: 6,
    title: "Product Photography Design",
    description: "Professional product photography and lifestyle images with post-production design.",
    image: "/3.jpg",
    tags: ["Photography", "Photo Editing", "Design"],
    type: "design",
    links: { demo: "https://drive.google.com/drive/folders/1c0VE-MMIkOUaAAcdlfZR6Rf_fBI3wWy2?usp=sharing"},
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of my recent work in web development and graphic design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-border bg-card hover-lift animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.links.demo}
                    className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.links.github}
                    className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                    {project.type === "coding" ? "Development" : "Design"}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-foreground/60 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-xs font-medium bg-muted text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

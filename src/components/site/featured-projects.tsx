import { ArrowRight, BarChart3, Layers, Shield } from 'lucide-react'

import { TechBadge } from '#/components/ui/tech-badge'
import { resume } from '#/data/resume'
import type { FeaturedProject } from '#/data/resume'

const iconMap = {
  layers: Layers,
  chart: BarChart3,
  shield: Shield,
}

const iconColors = {
  layers: 'bg-purple-500/20 text-purple-400',
  chart: 'bg-blue-500/20 text-blue-400',
  shield: 'bg-emerald-500/20 text-emerald-400',
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const Icon = iconMap[project.icon]

  return (
    <article className="site-card flex flex-col p-6">
      <div
        className={`mb-4 flex size-10 items-center justify-center rounded-lg ${iconColors[project.icon]}`}
      >
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
      <a
        href={`#experience-${project.experienceAnchor}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-primary)] no-underline hover:text-[var(--accent-muted)]"
      >
        View Details
        <ArrowRight className="size-4" />
      </a>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">Featured Projects</p>
        <h2 className="section-title mb-8">Selected work</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

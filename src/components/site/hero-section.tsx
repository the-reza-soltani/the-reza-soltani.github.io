import { ArrowRight } from 'lucide-react'

import { ArchDiagram } from '#/components/site/arch-diagram'
import { ResumeDownloadButton } from '#/components/site/resume-download-button'
import { TechBadge } from '#/components/ui/tech-badge'
import { Button } from '#/components/ui/button'
import { resume } from '#/data/resume'

export function HeroSection() {
  const { hero } = resume

  return (
    <section className="hero-section page-wrap py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label mb-4">{hero.label}</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-[3.25rem]">
            {hero.headline}{' '}
            <span className="gradient-text">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {hero.techTags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gradient-btn rounded-lg px-6 py-2.5">
              <a href="#projects">
                View My Work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <ResumeDownloadButton variant="hero" />
          </div>
        </div>

        <ArchDiagram />
      </div>
    </section>
  )
}

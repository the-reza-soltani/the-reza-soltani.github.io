import { ArrowUpRight, Github } from 'lucide-react'

import { resume } from '#/data/resume'
import { stripRichMarkers } from '#/lib/rich-text'

export function OssSection() {
  return (
    <section id="oss" className="scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">Open Source</p>
        <h2 className="section-title mb-8">OSS contributions</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {resume.oss.map((project) => (
            <article key={project.name} className="site-card p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {stripRichMarkers(project.description)}
              </p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-primary)] no-underline hover:text-[var(--accent-muted)]"
                >
                  <Github className="size-4" />
                  GitHub Repository
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { TechBadge } from '#/components/ui/tech-badge'
import { resume } from '#/data/resume'

function TimelineEntry({
  slug,
  period,
  company,
  role,
  summary,
  highlights,
  technologies,
  defaultExpanded = false,
}: (typeof resume.experience)[number] & { defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <article id={`experience-${slug}`} className="timeline-entry scroll-mt-24">
      <span className="timeline-dot" aria-hidden />
      <div className="site-card p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-mono text-xs font-medium text-[var(--accent-primary)]">
              {period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
              {company}
              <span className="font-normal text-[var(--text-muted)]">
                {' '}
                — {role}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {summary}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex size-8 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--accent-primary)] transition-colors hover:border-[var(--accent-primary)] hover:bg-[rgba(34,197,94,0.08)]"
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            <Plus
              className={`size-4 transition-transform ${expanded ? 'rotate-45' : ''}`}
            />
          </button>
        </div>

        {expanded ? (
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-muted)]">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">Experience</p>
        <h2 className="section-title mb-8">Where I&apos;ve worked</h2>

        <div className="experience-timeline">
          {resume.experience.map((job, index) => (
            <TimelineEntry
              key={job.slug}
              {...job}
              defaultExpanded={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

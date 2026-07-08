import { Badge } from '#/components/ui/badge'
import { resume } from '#/data/resume'

export function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {resume.experience.map((job) => (
        <article
          key={`${job.company}-${job.period}`}
          className="feature-card rounded-xl border border-[var(--line)] p-6"
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-[var(--sea-ink)]">{job.company}</h3>
              <p className="text-[var(--sea-ink-soft)]">
                {job.role} · {job.location}
              </p>
            </div>
            <p className="shrink-0 text-sm font-medium text-[var(--lagoon-deep)]">
              {job.period}
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--sea-ink-soft)]">
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[var(--chip-line)] text-xs text-[var(--sea-ink-soft)]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

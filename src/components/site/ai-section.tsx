import { BrainCircuit } from 'lucide-react'

import { TechBadge } from '#/components/ui/tech-badge'
import { resume } from '#/data/resume'
import type { AiInterestStatus } from '#/data/resume'

const STATUS_STYLES: Record<AiInterestStatus, string> = {
  Learning:
    'border-blue-400/25 bg-blue-500/10 text-blue-300',
  Building:
    'border-emerald-400/25 bg-emerald-500/10 text-emerald-300',
  Experimenting:
    'border-purple-400/25 bg-purple-500/10 text-purple-300',
  Exploring:
    'border-amber-400/25 bg-amber-500/10 text-amber-300',
}

function StatusBadge({ status }: { status: AiInterestStatus }) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  )
}

export function AiSection() {
  const { aiSection, hero } = resume

  return (
    <section id="ai" className="ai-section scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">{aiSection.label}</p>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="section-title">{aiSection.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              {aiSection.description}
            </p>
          </div>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.08)]">
            <BrainCircuit className="size-6 text-[var(--accent-purple)]" />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {hero.aiTechTags.map((tag) => (
            <TechBadge
              key={tag}
              name={tag}
              className="border-[rgba(139,92,246,0.15)] bg-[rgba(139,92,246,0.06)]"
            />
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {aiSection.topics.map((topic) => (
            <article
              key={topic.id}
              className="site-card flex flex-col gap-3 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {topic.title}
                </h3>
                <StatusBadge status={topic.status} />
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

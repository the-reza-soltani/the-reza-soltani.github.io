import { Building2, Calendar, Code2, Globe } from 'lucide-react'

import { resume } from '#/data/resume'
import type { SiteStat } from '#/data/resume'

const iconMap = {
  calendar: Calendar,
  building: Building2,
  globe: Globe,
  code: Code2,
}

function StatCard({ stat }: { stat: SiteStat }) {
  const Icon = stat.icon ? iconMap[stat.icon] : null

  return (
    <div className="site-card flex flex-col items-center justify-center p-5 text-center">
      {Icon ? (
        <Icon className="mb-3 size-5 text-[var(--accent-primary)]" />
      ) : null}
      <p className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
        {stat.value}
      </p>
      <p className="mt-1 text-xs text-[var(--text-muted)] md:text-sm">{stat.label}</p>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">About Me</p>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="section-title">{resume.about.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              {resume.about.description}
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {resume.about.educationNote}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {resume.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Boxes, Globe, Layers, Network, Shield, Zap } from 'lucide-react'

import { resume } from '#/data/resume'
import type { AboutBadge } from '#/data/resume'

const iconMap = {
  network: Network,
  layers: Layers,
  zap: Zap,
  boxes: Boxes,
  globe: Globe,
  shield: Shield,
}

type FocusBadgeProps = {
  badge: AboutBadge
}

function FocusBadge({ badge }: FocusBadgeProps) {
  const Icon = iconMap[badge.icon]

  return (
    <div className="site-card flex items-center gap-3 p-4">
      <Icon className="size-4 shrink-0 text-[var(--accent-primary)]" />
      <span className="text-sm font-medium leading-snug text-[var(--text-primary)]">
        {badge.label}
      </span>
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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {resume.about.badges.map((badge) => (
              <FocusBadge key={badge.label} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

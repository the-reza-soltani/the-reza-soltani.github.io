import { Badge } from '#/components/ui/badge'
import { resume } from '#/data/resume'

const skillLabels: Record<keyof typeof resume.skills, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Databases',
  architecture: 'Architecture',
  messaging: 'Messaging & Streaming',
  devops: 'DevOps & Cloud',
  performance: 'Performance Optimization',
  testing: 'Testing & Security',
  programming: 'Programming',
}

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(
        ([key, items]) => (
          <div
            key={key}
            className="feature-card rounded-xl border border-[var(--line)] p-5"
          >
            <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">
              {skillLabels[key]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

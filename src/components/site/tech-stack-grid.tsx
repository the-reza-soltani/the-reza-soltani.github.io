import { TechIcon } from '#/components/ui/tech-icon'
import { resume } from '#/data/resume'

const categoryLabels: Record<keyof typeof resume.skills, string> = {
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

export function TechStackGrid() {
  const entries = Object.entries(resume.skills) as [
    keyof typeof resume.skills,
    string[],
  ][]

  return (
    <section className="py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">Tech Stack</p>
        <h2 className="section-title mb-8">Technologies I work with</h2>

        <div className="site-card grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {entries.map(([key, items]) => (
            <div key={key}>
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                {categoryLabels[key]}
              </h3>
              <ul className="space-y-2.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]"
                  >
                    <TechIcon name={skill} size={16} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

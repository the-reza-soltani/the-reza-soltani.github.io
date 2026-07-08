import { resume } from '#/data/resume'

const categoryLabels: Record<keyof typeof resume.skills, string> = {
  languages: 'Languages',
  backend: 'Backend',
  databases: 'Databases',
  messaging: 'Messaging',
  devops: 'DevOps',
  architecture: 'Architecture',
  others: 'Others',
}

const dotColors = [
  'bg-purple-400',
  'bg-blue-400',
  'bg-emerald-400',
  'bg-amber-400',
  'bg-pink-400',
  'bg-cyan-400',
  'bg-orange-400',
]

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
          {entries.map(([key, items], categoryIndex) => (
            <div key={key}>
              <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                {categoryLabels[key]}
              </h3>
              <ul className="space-y-2.5">
                {items.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]"
                  >
                    <span
                      className={`size-2 shrink-0 rounded-full ${dotColors[(categoryIndex + skillIndex) % dotColors.length]}`}
                    />
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

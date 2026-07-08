import { resume } from '#/data/resume'

export function OssProjects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resume.oss.map((project) => (
        <article
          key={project.name}
          className="feature-card rounded-xl border border-[var(--line)] p-6"
        >
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[var(--sea-ink)] no-underline hover:text-[var(--lagoon-deep)]"
            >
              {project.name}
            </a>
          ) : (
            <h3 className="text-lg font-bold text-[var(--sea-ink)]">{project.name}</h3>
          )}
          <p className="mt-2 text-[var(--sea-ink-soft)]">{project.description}</p>
        </article>
      ))}
    </div>
  )
}

import { resume } from '#/data/resume'

export function Education() {
  return (
    <div className="space-y-4">
      {resume.education.map((entry) => (
        <article
          key={entry.school}
          className="feature-card rounded-xl border border-[var(--line)] p-6"
        >
          <h3 className="text-lg font-bold text-[var(--sea-ink)]">{entry.school}</h3>
          <p className="mt-1 text-[var(--sea-ink-soft)]">{entry.degree}</p>
        </article>
      ))}
    </div>
  )
}

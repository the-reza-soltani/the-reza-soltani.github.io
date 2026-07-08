import { Github, Linkedin, Mail } from 'lucide-react'

import { resume } from '#/data/resume'

export function ResumeHeader() {
  const { name, title, contact } = resume

  return (
    <header className="island-shell rise-in rounded-2xl p-8 md:p-10">
      <h1 className="display-title text-4xl font-bold tracking-tight text-[var(--sea-ink)] md:text-5xl">
        {name}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-[var(--sea-ink-soft)]">{title}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-medium text-[var(--sea-ink)] no-underline hover:bg-[var(--link-bg-hover)]"
        >
          <Mail className="size-4" />
          {contact.email}
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-medium text-[var(--sea-ink)] no-underline hover:bg-[var(--link-bg-hover)]"
        >
          <Linkedin className="size-4" />
          LinkedIn
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-medium text-[var(--sea-ink)] no-underline hover:bg-[var(--link-bg-hover)]"
        >
          <Github className="size-4" />
          GitHub
        </a>
      </div>
    </header>
  )
}

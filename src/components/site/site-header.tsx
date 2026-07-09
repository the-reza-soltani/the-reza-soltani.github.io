import { Moon } from 'lucide-react'

import { ResumeDownloadButton } from '#/components/site/resume-download-button'
import { resume } from '#/data/resume'

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="page-wrap grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
        <a
          href="#"
          className="flex items-center gap-2.5 font-semibold text-[var(--text-primary)] no-underline"
          aria-label="Home"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-[var(--accent-primary)] text-xs font-bold text-[#050505]">
            RS
          </span>
          <span className="hidden sm:inline">{resume.name}</span>
        </a>

        <nav className="hidden items-center justify-center gap-6 md:flex">
          {resume.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span
            className="hidden text-[var(--text-muted)] sm:inline-flex"
            aria-hidden
          >
            <Moon className="size-4" />
          </span>
          <ResumeDownloadButton />
        </div>
      </div>
    </header>
  )
}

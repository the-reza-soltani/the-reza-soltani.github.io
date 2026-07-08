import { resume } from '#/data/resume'

import { ResumeDownloadButton } from '#/components/site/resume-download-button'

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="page-wrap grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
        <a
          href="#"
          className="flex items-center font-semibold text-[var(--accent-purple)] no-underline"
          aria-label="Home"
        >
          &lt;/&gt;
        </a>

        <nav className="hidden items-center justify-center gap-6 md:flex">
          {resume.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <ResumeDownloadButton />
      </div>
    </header>
  )
}

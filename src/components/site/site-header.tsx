import { Download } from 'lucide-react'

import { Button } from '#/components/ui/button'
import { resume } from '#/data/resume'

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="page-wrap flex items-center justify-between gap-4 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-[var(--text-primary)] no-underline">
          <span className="text-[var(--accent-purple)]">&lt;/&gt;</span>
          {resume.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {resume.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          size="sm"
          className="outline-btn shrink-0 rounded-lg border-[var(--border-strong)] bg-transparent"
          onClick={() => window.print()}
        >
          <Download className="size-4" />
          Resume
        </Button>
      </div>
    </header>
  )
}

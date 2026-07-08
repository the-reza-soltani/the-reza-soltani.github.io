import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '#/components/ui/button'
import { resume } from '#/data/resume'

export function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="site-footer scroll-mt-20">
      <div className="page-wrap py-16">
        <div className="contact-cta site-card flex flex-col items-center justify-between gap-6 p-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-[var(--text-muted)]">
              Let&apos;s build something great together.
            </p>
          </div>
          <Button asChild className="gradient-btn shrink-0 rounded-lg px-8 py-2.5">
            <a href={`mailto:${resume.contact.email}`}>Let&apos;s Talk</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            variant="outline"
            className="outline-btn rounded-lg border-[var(--border-strong)]"
          >
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="outline-btn rounded-lg border-[var(--border-strong)]"
          >
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="outline-btn rounded-lg border-[var(--border-strong)]"
          >
            <a href={`mailto:${resume.contact.email}`}>
              <Mail className="size-4" />
              Email
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--text-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {resume.name}. All rights reserved.</p>
          <p className="text-center">
            Built with TanStack Start, TypeScript &amp; Tailwind CSS
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top inline-flex items-center gap-1 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            Back to top
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

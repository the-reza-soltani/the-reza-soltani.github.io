import { Badge } from '#/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#/components/ui/accordion'
import { resume } from '#/data/resume'

export function ExperienceAccordion() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <div className="page-wrap">
        <p className="section-label mb-3">Experience</p>
        <h2 className="section-title mb-8">Where I&apos;ve worked</h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="daal"
          className="space-y-3"
        >
          {resume.experience.map((job) => (
            <AccordionItem
              key={job.slug}
              value={job.slug}
              id={`experience-${job.slug}`}
              className="site-card scroll-mt-24 rounded-xl border px-6 data-[state=open]:border-[rgba(139,92,246,0.3)]"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="flex w-full flex-col gap-1 pr-4 text-left md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-medium text-[var(--accent-purple)]">
                      {job.period}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                      {job.company}
                      <span className="font-normal text-[var(--text-muted)]">
                        {' '}
                        — {job.role}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)] md:hidden">
                      {job.summary}
                    </p>
                  </div>
                  <p className="hidden max-w-sm text-sm text-[var(--text-muted)] md:block">
                    {job.summary}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-muted)]">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-[var(--border)] text-xs text-[var(--text-muted)]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

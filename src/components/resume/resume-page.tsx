import { Education } from '#/components/resume/education'
import { ExperienceTimeline } from '#/components/resume/experience-timeline'
import { OssProjects } from '#/components/resume/oss-projects'
import { ResumeHeader } from '#/components/resume/resume-header'
import { ResumeNav } from '#/components/resume/resume-nav'
import { ResumeSection } from '#/components/resume/resume-section'
import { SkillsGrid } from '#/components/resume/skills-grid'
import { resume } from '#/data/resume'

export function ResumePage() {
  return (
    <>
      <ResumeNav />
      <main className="page-wrap space-y-10 py-10 pb-16">
        <ResumeHeader />

        <ResumeSection id="summary" title="Summary">
          <div className="island-shell rounded-2xl p-6 md:p-8">
            <p className="text-base leading-relaxed text-[var(--sea-ink-soft)]">
              {resume.summary}
            </p>
          </div>
        </ResumeSection>

        <ResumeSection id="skills" title="Technical Skills">
          <SkillsGrid />
        </ResumeSection>

        <ResumeSection id="experience" title="Experience">
          <ExperienceTimeline />
        </ResumeSection>

        <ResumeSection id="oss" title="Open Source">
          <OssProjects />
        </ResumeSection>

        <ResumeSection id="education" title="Education">
          <Education />
        </ResumeSection>
      </main>

      <footer className="site-footer py-6 text-center text-sm text-[var(--sea-ink-soft)]">
        <div className="page-wrap">
          © {new Date().getFullYear()} {resume.name}
        </div>
      </footer>
    </>
  )
}

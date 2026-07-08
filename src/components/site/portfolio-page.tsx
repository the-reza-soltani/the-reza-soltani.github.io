import { AboutSection } from '#/components/site/about-section'
import { AiBackground } from '#/components/site/ai-background'
import { AiSection } from '#/components/site/ai-section'
import { ContactFooter } from '#/components/site/contact-footer'
import { ExperienceAccordion } from '#/components/site/experience-accordion'
import { FeaturedProjects } from '#/components/site/featured-projects'
import { HeroSection } from '#/components/site/hero-section'
import { OssSection } from '#/components/site/oss-section'
import { SiteHeader } from '#/components/site/site-header'
import { TechStackGrid } from '#/components/site/tech-stack-grid'

export function PortfolioPage() {
  return (
    <>
      <AiBackground />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ExperienceAccordion />
      <FeaturedProjects />
      <AiSection />
      <TechStackGrid />
      <OssSection />
      <ContactFooter />
    </>
  )
}

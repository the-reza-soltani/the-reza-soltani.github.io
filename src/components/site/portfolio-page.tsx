import { AboutSection } from '#/components/site/about-section'
import { AiSection } from '#/components/site/ai-section'
import { ContactFooter } from '#/components/site/contact-footer'
import { CustomCursor } from '#/components/site/custom-cursor'
import { ExperienceTimeline } from '#/components/site/experience-timeline'
import { FeaturedProjects } from '#/components/site/featured-projects'
import { HeroSection } from '#/components/site/hero-section'
import { InfrastructureBackground } from '#/components/site/infrastructure-background'
import { OssSection } from '#/components/site/oss-section'
import { SiteHeader } from '#/components/site/site-header'
import { TechStackGrid } from '#/components/site/tech-stack-grid'

export function PortfolioPage() {
  return (
    <>
      <InfrastructureBackground />
      <CustomCursor />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <AiSection />
      <TechStackGrid />
      <OssSection />
      <ContactFooter />
    </>
  )
}

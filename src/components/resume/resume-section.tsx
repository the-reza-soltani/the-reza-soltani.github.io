type ResumeSectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export function ResumeSection({ id, title, children }: ResumeSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="island-kicker mb-2">{title}</p>
      {children}
    </section>
  )
}

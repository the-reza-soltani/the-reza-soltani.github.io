import { resume } from '#/data/resume'

export function ResumeNav() {
  return (
    <nav className="resume-nav sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="page-wrap flex items-center gap-6 overflow-x-auto py-4">
        {resume.navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-link shrink-0 text-sm font-semibold">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

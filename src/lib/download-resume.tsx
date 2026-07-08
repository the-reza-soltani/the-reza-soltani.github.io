import { resume } from '#/data/resume'

export async function downloadResumePdf() {
  const [{ pdf }, { ResumeDocument }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('#/components/resume-pdf/resume-document'),
  ])

  const blob = await pdf(<ResumeDocument />).toBlob()
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${resume.name.replace(/\s+/g, '-')}-Resume.pdf`
  anchor.click()
  URL.revokeObjectURL(url)
}

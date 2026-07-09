import { createFileRoute } from '@tanstack/react-router'

import { ResumePreviewPage } from '#/components/resume-pdf/resume-preview-page'

export const Route = createFileRoute('/resume-preview')({
  head: () => ({
    meta: [
      { title: 'Resume Preview' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: ResumePreviewPage,
})

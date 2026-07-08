import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'

import { Button } from '#/components/ui/button'
import { downloadResumePdf } from '#/lib/download-resume'

type ResumeDownloadButtonProps = {
  variant?: 'header' | 'hero'
}

export function ResumeDownloadButton({ variant = 'header' }: ResumeDownloadButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    try {
      setLoading(true)
      await downloadResumePdf()
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'hero') {
    return (
      <Button
        variant="outline"
        className="outline-btn rounded-lg px-6 py-2.5"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
        Download Resume
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="outline-btn shrink-0 rounded-lg border-[var(--border-strong)] bg-transparent"
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Download className="size-4" />
      )}
      Resume
    </Button>
  )
}

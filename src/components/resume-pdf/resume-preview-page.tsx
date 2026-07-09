import { useEffect, useState } from 'react'
import type { ComponentType, CSSProperties, ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, Download, Loader2 } from 'lucide-react'

import { Button } from '#/components/ui/button'
import { downloadResumePdf } from '#/lib/download-resume'
import { registerResumeFonts } from '#/lib/register-resume-fonts'

type PdfViewerComponent = ComponentType<{
  style?: CSSProperties
  children?: ReactNode
}>

type ResumeDocumentComponent = ComponentType

export function ResumePreviewPage() {
  const [PdfViewer, setPdfViewer] = useState<PdfViewerComponent | null>(null)
  const [ResumeDocument, setResumeDocument] =
    useState<ResumeDocumentComponent | null>(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    let cancelled = false

    registerResumeFonts()

    Promise.all([
      import('@react-pdf/renderer'),
      import('#/components/resume-pdf/resume-document'),
    ]).then(([{ PDFViewer }, { ResumeDocument: Doc }]) => {
      if (cancelled) return
      setPdfViewer(() => PDFViewer as PdfViewerComponent)
      setResumeDocument(() => Doc)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const handleDownload = async () => {
    try {
      setDownloading(true)
      await downloadResumePdf()
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a]">
      <header className="flex items-center justify-between gap-4 border-b border-[#2a2a2a] px-4 py-3">
        <Button asChild variant="outline" size="sm" className="outline-btn">
          <Link to="/">
            <ArrowLeft className="size-4" />
            Back to site
          </Link>
        </Button>

        <p className="font-mono text-xs text-[#a1a1aa]">Resume preview</p>

        <Button
          variant="outline"
          size="sm"
          className="outline-btn"
          onClick={handleDownload}
          disabled={downloading || !ResumeDocument}
        >
          {downloading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Download className="size-4" />
          )}
          Download PDF
        </Button>
      </header>

      <main className="flex-1">
        {PdfViewer && ResumeDocument ? (
          <PdfViewer
            style={{
              width: '100%',
              height: 'calc(100vh - 57px)',
              border: 'none',
            }}
          >
            <ResumeDocument />
          </PdfViewer>
        ) : (
          <div className="flex h-[calc(100vh-57px)] items-center justify-center">
            <Loader2 className="size-8 animate-spin text-[var(--accent-primary,#22c55e)]" />
          </div>
        )}
      </main>
    </div>
  )
}

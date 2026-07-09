import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const enabledRef = useRef(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    if (!mounted) return

    const cursor = cursorRef.current
    if (!cursor) return

    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncEnabled = () => {
      const enabled = finePointer.matches && !reducedMotion.matches
      enabledRef.current = enabled
      cursor.classList.toggle('custom-cursor-visible', enabled)
      document.body.classList.toggle('custom-cursor-active', enabled)
    }

    syncEnabled()
    finePointer.addEventListener('change', syncEnabled)
    reducedMotion.addEventListener('change', syncEnabled)

    const onMove = (e: PointerEvent) => {
      if (!enabledRef.current) return
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.body.classList.remove('custom-cursor-active')
      finePointer.removeEventListener('change', syncEnabled)
      reducedMotion.removeEventListener('change', syncEnabled)
    }
  }, [mounted])

  if (!mounted) return null

  return createPortal(
    <div ref={cursorRef} className="custom-cursor" aria-hidden>
      <span className="custom-cursor-cross" />
      <span className="custom-cursor-dot" />
    </div>,
    document.body,
  )
}

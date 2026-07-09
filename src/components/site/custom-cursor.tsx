import { useEffect, useRef, useState } from 'react'

type TrailDot = {
  id: number
  x: number
  y: number
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [trails, setTrails] = useState<TrailDot[]>([])
  const trailId = useRef(0)
  const lastTrail = useRef({ x: 0, y: 0, time: 0 })
  const enabled = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hasFinePointer = window.matchMedia('(pointer: fine)')

    const updateEnabled = () => {
      enabled.current = hasFinePointer.matches && !prefersReducedMotion.matches
      document.body.classList.toggle('custom-cursor-active', enabled.current)
    }

    updateEnabled()
    prefersReducedMotion.addEventListener('change', updateEnabled)
    hasFinePointer.addEventListener('change', updateEnabled)

    const onMove = (e: MouseEvent) => {
      if (!enabled.current) return

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }

      const now = Date.now()
      const dx = e.clientX - lastTrail.current.x
      const dy = e.clientY - lastTrail.current.y
      const dist = Math.hypot(dx, dy)

      if (dist > 12 && now - lastTrail.current.time > 50) {
        const id = trailId.current++
        lastTrail.current = { x: e.clientX, y: e.clientY, time: now }
        setTrails((prev) => [...prev.slice(-6), { id, x: e.clientX, y: e.clientY }])
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id))
        }, 400)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('custom-cursor-active')
      prefersReducedMotion.removeEventListener('change', updateEnabled)
      hasFinePointer.removeEventListener('change', updateEnabled)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden>
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="custom-cursor-trail"
          style={{
            position: 'fixed',
            left: trail.x,
            top: trail.y,
          }}
        />
      ))}
      <span className="custom-cursor-cross" />
      <span className="custom-cursor-dot" />
    </div>
  )
}

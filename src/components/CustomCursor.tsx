import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('has-cursor')

    const dotX = gsap.quickTo(dot.current, 'x', { duration: 0.1, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot.current, 'y', { duration: 0.1, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3.out' })

    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50 })

    const onMove = (e: PointerEvent) => {
      dot.current?.classList.add('is-active')
      ring.current?.classList.add('is-active')
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)

      const view = (e.target as Element | null)?.closest?.('[data-cursor="view"]')
      ring.current?.classList.toggle('is-view', !!view)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={ring} aria-hidden="true">
        <span>Voir</span>
      </div>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  )
}

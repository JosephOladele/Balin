import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Chunk({ ghost }: { ghost?: boolean }) {
  return (
    <span className="marquee__chunk" aria-hidden="true">
      {ghost ? (
        <>
          Édition Nº7 <span className="dot" /> Paris <span className="dot" />
        </>
      ) : (
        <>
          balin <em>Automne–Hiver 2026</em> <span className="dot" />
        </>
      )}
    </span>
  )
}

export default function Marquee() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.marquee__row--main', {
          xPercent: -50,
          duration: 28,
          ease: 'none',
          repeat: -1,
        })
        gsap.fromTo(
          '.marquee__row--ghost',
          { xPercent: -50 },
          { xPercent: 0, duration: 34, ease: 'none', repeat: -1 }
        )
      })
    },
    { scope: root }
  )

  return (
    <section className="marquee" ref={root} aria-label="balin — Automne Hiver 2026, Édition Nº7, Paris">
      <div className="marquee__row marquee__row--main">
        {Array.from({ length: 4 }, (_, i) => (
          <Chunk key={i} />
        ))}
      </div>
      <div className="marquee__row marquee__row--ghost">
        {Array.from({ length: 4 }, (_, i) => (
          <Chunk key={i} ghost />
        ))}
      </div>
    </section>
  )
}

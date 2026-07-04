import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { lockScroll } from '../lib/smooth-scroll'

const LETTERS = 'BALIN'.split('')

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useGSAP(
    () => {
      lockScroll(true)
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          lockScroll(false)
          onComplete()
          setDone(true)
        },
      })

      tl.to('.preloader__word span', {
        y: 0,
        duration: 1.1,
        stagger: 0.07,
        delay: 0.25,
      })
        .to('.preloader__line i', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, '<0.2')
        .to('.preloader__sub', { opacity: 1, duration: 0.8 }, '<0.5')
        .to(
          '.preloader__word span',
          { y: '-120%', duration: 0.9, stagger: 0.045, ease: 'power4.in' },
          '+=0.45'
        )
        .to('.preloader__line, .preloader__sub', { opacity: 0, duration: 0.4 }, '<')
        .to(root.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.1,
          ease: 'power4.inOut',
        })
    },
    { scope: root }
  )

  if (done) return null

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader__word">
        {LETTERS.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      <div className="preloader__line">
        <i />
      </div>
      <p className="preloader__sub label">Maison de Couture — Paris</p>
    </div>
  )
}

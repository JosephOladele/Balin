import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ATELIER } from '../data/content'

export default function Atelier() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: '.atelier__stage',
            start: 'top top',
            end: '+=280%',
            pin: true,
            scrub: 1,
          },
        })

        tl.fromTo(
          '.atelier__frame',
          { scale: 0.55, filter: 'brightness(0.15)' },
          { scale: 1, filter: 'brightness(1)', duration: 3, ease: 'power1.inOut' }
        )
          .fromTo(
            '.atelier__frame img',
            { scale: 1.35 },
            { scale: 1, duration: 3, ease: 'power1.inOut' },
            0
          )
          .fromTo(
            '.atelier__title',
            { opacity: 0, letterSpacing: '0.3em' },
            { opacity: 1, letterSpacing: '0.02em', duration: 2 },
            0.6
          )
          .to('.atelier__caption--1', { opacity: 1, duration: 0.6 }, 2)
          .to('.atelier__caption--2', { opacity: 1, duration: 0.6 }, 2.7)
          .to('.atelier__caption--3', { opacity: 1, duration: 0.6 }, 3.4)
          .to('.atelier__coda', { opacity: 1, duration: 0.8 }, 4.1)
          .to({}, { duration: 0.6 }) // hold the finished scene
      })
    },
    { scope: root }
  )

  return (
    <section className="atelier" id="atelier" ref={root} aria-label="L'Atelier">
      <div className="atelier__stage">
        <h2 className="atelier__title">L’Atelier</h2>
        <figure className="atelier__frame" data-cursor="view">
          <img src={ATELIER.img} alt={ATELIER.alt} loading="lazy" />
        </figure>
        <div className="atelier__captions" aria-hidden="true">
          {ATELIER.captions.map((c, i) => (
            <p key={c} className={`atelier__caption atelier__caption--${i + 1}`}>
              <i /> {c}
            </p>
          ))}
        </div>
        <p className="atelier__coda label">Chaque pièce, une œuvre — 03</p>
      </div>
    </section>
  )
}

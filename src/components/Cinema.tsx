import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CINEMA } from '../data/content'

export default function Cinema() {
  const root = useRef<HTMLElement>(null)
  const [videoOk, setVideoOk] = useState(true)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.cinema__band > video, .cinema__band > .cinema__poster',
          { yPercent: -9 },
          {
            yPercent: 9,
            ease: 'none',
            scrollTrigger: {
              trigger: '.cinema__band',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: root }
  )

  return (
    <section className="cinema" ref={root} aria-label="balin Cinéma">
      <div className="cinema__head">
        <div>
          <p className="label label--bronze">04 — Cinéma</p>
          <h2 className="cinema__title">Campagne AH ’26 — le film</h2>
        </div>
        <p className="label" style={{ color: 'var(--smoke)' }}>
          Réalisé par L. Moreau
        </p>
      </div>

      <div className="cinema__band" data-cursor="view">
        <div className="cinema__poster" style={{ backgroundImage: `url(${CINEMA.poster})` }} />
        {videoOk && (
          <video
            src={CINEMA.video}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label="balin campaign film, muted loop"
            onPlaying={(e) => e.currentTarget.classList.add('is-playing')}
            onError={() => setVideoOk(false)}
          />
        )}
        <div className="cinema__badge" aria-hidden="true">
          Le Film
        </div>
      </div>

      <div className="cinema__credit">
        <span>35mm — couleur</span>
        <span>Paris, 2026</span>
      </div>
    </section>
  )
}

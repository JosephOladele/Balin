import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { LOOKS } from '../data/content'

export default function CoverStory() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const getDistance = () =>
          (track.current?.scrollWidth ?? 0) - window.innerWidth

        const scrollTween = gsap.to(track.current, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.covers__viewport',
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        // progress bar
        gsap.to('.covers__progress i', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.covers__viewport',
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: true,
          },
        })

        // inner parallax on each look image, driven by the horizontal tween
        gsap.utils.toArray<HTMLElement>('.look__frame img').forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -8 },
            {
              xPercent: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: img,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          )
        })

        ScrollTrigger.refresh()
      })
    },
    { scope: root }
  )

  return (
    <section className="covers" id="collection" ref={root}>
      <div className="covers__head">
        <div>
          <p className="label label--bronze">02 — La Collection</p>
          <h2 className="covers__title">Automne–Hiver ’26</h2>
        </div>
        <p className="covers__hint label">
          <i aria-hidden="true" /> Défiler pour traverser
        </p>
      </div>

      <div className="covers__viewport">
        <div className="covers__track" ref={track}>
          {LOOKS.map((look) => (
            <article
              key={look.id}
              className={`look${look.wide ? ' look--wide' : ''}`}
              data-cursor="view"
            >
              <div className="look__frame">
                <span className="look__num" aria-hidden="true">
                  {look.num}
                </span>
                {/* eager: transform-driven horizontal track defeats native lazy-loading */}
                <img src={look.img} alt={look.alt} loading="eager" decoding="async" />
              </div>
              <div className="look__meta">
                <h3 className="look__name">{look.name}</h3>
                <span className="look__tag">{look.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="covers__progress" aria-hidden="true">
        <i />
      </div>
    </section>
  )
}

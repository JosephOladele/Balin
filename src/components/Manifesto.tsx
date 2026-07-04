import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import { MANIFESTO_IMAGES } from '../data/content'

export default function Manifesto() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = SplitText.create('.manifesto__headline', {
          type: 'lines',
          mask: 'lines',
        })
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.manifesto__headline', start: 'top 78%' },
        })

        gsap.from('.manifesto__body p', {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.manifesto__body', start: 'top 80%' },
        })

        // parallax figures — inner image drifts slower than the frame
        gsap.utils.toArray<HTMLElement>('.manifesto__fig').forEach((fig, i) => {
          const img = fig.querySelector('img')
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          )
          gsap.from(fig, {
            clipPath: 'inset(100% 0 0 0)',
            duration: 1.4,
            delay: i * 0.1,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: fig, start: 'top 85%' },
          })
        })

        const quoteSplit = SplitText.create('.manifesto__quote blockquote', {
          type: 'words',
        })
        gsap.from(quoteSplit.words, {
          opacity: 0.08,
          duration: 0.6,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: '.manifesto__quote',
            start: 'top 75%',
            end: 'top 35%',
            scrub: true,
          },
        })
      })
    },
    { scope: root }
  )

  return (
    <section className="manifesto" id="maison" ref={root}>
      <span className="manifesto__index label" aria-hidden="true">
        01 — La Maison
      </span>
      <div className="manifesto__inner">
        <p className="manifesto__kicker label label--bronze">La Maison · Depuis 2026</p>

        <h2 className="manifesto__headline">
          Restraint is the ultimate <em>sophistication.</em>
        </h2>

        <div className="manifesto__body">
          <p className="dropcap">
            balin was founded on a refusal — the refusal to shout. In an age of
            noise, the house builds garments the way one writes a letter by
            hand: slowly, deliberately, and only when there is something worth
            saying. Each piece begins as twelve metres of cloth and a single
            line drawn in chalk.
          </p>
          <p>
            The atelier sits above Rue Saint-Honoré, where four hands work on
            every coat and no seam leaves the table unfinished. We do not
            follow seasons; we publish editions — chapters in a longer
            correspondence between the maison and those who wear it.
          </p>
        </div>

        <div className="manifesto__figures">
          <figure className="manifesto__fig manifesto__fig--a" data-cursor="view">
            <img src={MANIFESTO_IMAGES.a.src} alt={MANIFESTO_IMAGES.a.alt} loading="lazy" />
            <figcaption>{MANIFESTO_IMAGES.a.caption}</figcaption>
          </figure>
          <figure className="manifesto__fig manifesto__fig--b" data-cursor="view">
            <img src={MANIFESTO_IMAGES.b.src} alt={MANIFESTO_IMAGES.b.alt} loading="lazy" />
            <figcaption>{MANIFESTO_IMAGES.b.caption}</figcaption>
          </figure>
        </div>

        <div className="manifesto__quote">
          <blockquote>
            “Luxury is not what you add. It is everything you have the courage
            to refuse.”
          </blockquote>
          <footer>— A. Balin, fondatrice</footer>
        </div>
      </div>
    </section>
  )
}

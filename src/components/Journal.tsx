import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ARTICLES } from '../data/content'

export default function Journal() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.article', {
          opacity: 0,
          y: 60,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.journal__grid', start: 'top 80%' },
        })
      })
    },
    { scope: root }
  )

  return (
    <section className="journal" id="journal" ref={root}>
      <div className="journal__head">
        <div>
          <p className="label label--bronze">05 — Le Journal</p>
          <h2 className="journal__title">Notes de la Maison</h2>
        </div>
        <a className="label" href="#journal" style={{ color: 'var(--smoke)' }}>
          Tous les articles
        </a>
      </div>

      <div className="journal__grid">
        {ARTICLES.map((a) => (
          <article key={a.id} className={`article${a.feature ? ' article--feature' : ''}`}>
            <a className="article__frame" href={`#journal-${a.id}`} data-cursor="view" aria-label={a.title}>
              <img src={a.img} alt={a.alt} loading="lazy" />
            </a>
            <div>
              <p className="article__kicker">
                <span>
                  {a.index} · {a.kicker}
                </span>
                <time>{a.date}</time>
              </p>
              <h3 className="article__title">{a.title}</h3>
              <p className="article__excerpt">{a.excerpt}</p>
              {a.feature && (
                <p style={{ marginTop: '1.4rem' }}>
                  <a className="article__more" href={`#journal-${a.id}`}>
                    Lire l’essai
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

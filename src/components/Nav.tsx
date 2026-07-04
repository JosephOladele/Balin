import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NAV_LINKS } from '../data/content'
import { scrollToSection, lockScroll } from '../lib/smooth-scroll'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menu = useRef<HTMLDivElement>(null)

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(href)
  }

  useGSAP(
    () => {
      lockScroll(open)
      if (open) {
        gsap.set(menu.current, { visibility: 'visible' })
        gsap
          .timeline()
          .to(menu.current, {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.9,
            ease: 'power4.inOut',
          })
          .fromTo(
            '.menu a',
            { yPercent: 120 },
            { yPercent: 0, duration: 0.8, stagger: 0.07, ease: 'power4.out' },
            '-=0.35'
          )
          .fromTo('.menu__foot', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '<0.3')
      } else {
        gsap.to(menu.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.7,
          ease: 'power4.inOut',
          onComplete: () => gsap.set(menu.current, { visibility: 'hidden' }),
        })
      }
    },
    { dependencies: [open], scope: menu }
  )

  return (
    <>
      <header className="nav">
        <a
          className="nav__logo"
          href="#top"
          aria-label="balin — back to top"
          onClick={(e) => go(e, '#top')}
        >
          BALIN
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links label">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="nav__edition label">Édition Nº7</span>
        <button
          className="nav__menu-btn"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          Menu <i aria-hidden="true" />
        </button>
      </header>

      <div
        className="menu"
        ref={menu}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <button className="menu__close label" onClick={() => setOpen(false)}>
          Fermer
        </button>
        <ul>
          {NAV_LINKS.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => go(e, l.href)}>
                <em>{String(i + 1).padStart(2, '0')}</em>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="menu__foot label">Automne — Hiver 2026 · Paris</p>
      </div>
    </>
  )
}

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { HERO } from '../data/content'

const TITLE = 'BALIN'.split('')

export default function Hero({ start }: { start: boolean }) {
  const root = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoOk, setVideoOk] = useState(true)
  const [paused, setPaused] = useState(false)

  useGSAP(
    () => {
      if (!start) return
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo(
        '.hero__poster, .hero__video',
        { scale: 1.12 },
        { scale: 1, duration: 2.6, ease: 'power2.out' }
      )
        .to('.hero__title span > i', { y: 0, duration: 1.3, stagger: 0.08 }, 0.15)
        .to('.hero__eyebrow', { opacity: 1, duration: 1 }, 0.9)
        .to('.hero__meta', { opacity: 1, duration: 1 }, 1.2)
    },
    { dependencies: [start], scope: root }
  )

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.hero__media', {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
        gsap.to('.hero__content', {
          opacity: 0.15,
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'center center',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
      ScrollTrigger.refresh()
    },
    { scope: root }
  )

  const toggleVideo = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      void v.play()
      setPaused(false)
    } else {
      v.pause()
      setPaused(true)
    }
  }

  return (
    <section className="hero" id="top" ref={root} aria-label="balin — Automne Hiver 2026">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__poster" style={{ backgroundImage: `url(${HERO.poster})` }} />
        {videoOk && (
          <video
            ref={videoRef}
            className="hero__video"
            src={HERO.video}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            onPlaying={(e) => e.currentTarget.classList.add('is-playing')}
            onError={() => setVideoOk(false)}
          />
        )}
        <div className="hero__shade" />
      </div>

      {videoOk && (
        <button
          className="hero__av-toggle"
          onClick={toggleVideo}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
        >
          {paused ? 'Lire' : 'Pause'}
        </button>
      )}

      <div className="hero__content">
        <p className="hero__eyebrow label">
          <i aria-hidden="true" /> Maison de Couture — Édition Nº7
        </p>
        <h1 className="hero__title" aria-label="BALIN">
          {TITLE.map((l, i) => (
            <span key={i} aria-hidden="true">
              <i>{l}</i>
            </span>
          ))}
        </h1>
        <div className="hero__meta">
          <p>
            Automne–Hiver 2026. A study in restraint — twelve looks, one atelier,
            and the silence between them.
          </p>
          <div className="hero__scrollcue label" aria-hidden="true">
            Défiler
            <i />
          </div>
        </div>
      </div>
    </section>
  )
}

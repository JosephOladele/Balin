import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis: Lenis | null = null

export function initSmoothScroll(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  lenis.on('scroll', ScrollTrigger.update)

  const raf = (time: number) => lenis?.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(raf)
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToSection(target: string) {
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.8 })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export function lockScroll(locked: boolean) {
  if (!lenis) return
  if (locked) lenis.stop()
  else lenis.start()
}

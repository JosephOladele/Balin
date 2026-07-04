import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

import { initSmoothScroll } from './lib/smooth-scroll'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import CoverStory from './components/CoverStory'
import Atelier from './components/Atelier'
import Cinema from './components/Cinema'
import Journal from './components/Journal'
import Marquee from './components/Marquee'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const cleanup = initSmoothScroll()
    return cleanup
  }, [])

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <CustomCursor />
      <Nav />
      <main>
        <Hero start={ready} />
        <Manifesto />
        <CoverStory />
        <Atelier />
        <Cinema />
        <Journal />
        <Marquee />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  )
}

// ── App.jsx ──
// Wires all sections and global components together.
// No logic lives here — each piece is in its own file.

import { useState, useEffect } from 'react'

import OceanCanvas    from './components/OceanCanvas'
import Cursor         from './components/Cursor'
import LoadingScreen  from './components/LoadingScreen'
import Nav            from './components/Nav'
import Footer         from './components/Footer'

import Hero       from './sections/Hero'
import About      from './sections/About'
import Skills     from './sections/Skills'
import Projects   from './sections/Projects'
import Voyage     from './sections/Voyage'
import News       from './sections/News'
import Leadership from './sections/Leadership'
import Contact    from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <OceanCanvas />
      <Cursor />
      <LoadingScreen done={loaded} />

      <div className="site">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Voyage />
        <News />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

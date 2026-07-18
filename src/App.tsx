import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Restaurant from './components/Restaurant'
import SwimmingPool from './components/SwimmingPool'
import Playground from './components/Playground'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.section-observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Restaurant />
      <SwimmingPool />
      <Playground />
      <Gallery />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  )
}

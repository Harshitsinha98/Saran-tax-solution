import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import OurTeam from './components/OurTeam'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div key="main" className="relative">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <Contact />
            <About />
             <FAQ />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
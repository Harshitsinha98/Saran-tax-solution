import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import Sitemap from './components/Sitemap'

// Everything that used to live directly inside <main> in App now lives
// here, in the exact same order — this is what renders on the "/" route.
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <About />
      <FAQ />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Jump to the top of the page whenever the route changes, so navigating
  // to Privacy Policy / Terms / Sitemap doesn't land you mid-scroll.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div key="main" className="relative">
          <ScrollProgress />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
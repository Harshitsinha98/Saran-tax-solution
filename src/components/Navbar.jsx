import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-2xl border-b border-dark-100 shadow-sm shadow-dark-100/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-white shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow duration-300 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Saran Tax Solution"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="text-sm sm:text-base font-display font-bold text-dark-900 tracking-tight whitespace-nowrap">
                Saran Tax Solution
              </span>
              <span className="hidden sm:block text-[10px] font-medium text-primary-600 uppercase tracking-[0.18em] mt-1">
                Team of CA &amp; Advocates
              </span>
            </div>

          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm text-dark-600 hover:text-dark-900 rounded-xl hover:bg-dark-50 transition-all duration-300 font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.3 }}
              >
                {link.name}
                <span className="absolute left-4 right-4 bottom-1 h-px bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <motion.a
              href="tel:+919852239281"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all duration-300 shadow-sm shadow-primary-500/30 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
              <Phone size={14} className="relative z-10" />
              <span className="relative z-10">Call Now</span>
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl text-dark-700 hover:bg-dark-100 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 p-4 lg:hidden"
          >
            <div className="bg-white border border-dark-100 rounded-2xl p-6 space-y-1 shadow-xl shadow-dark-200/30">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-dark-700 hover:text-dark-900 hover:bg-dark-50 rounded-xl transition-all duration-200 font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4 flex gap-3">
                <a
                  href="tel:+919852239281"
                  className="flex-1 text-center py-3 rounded-xl bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/+919852239281"
                  className="flex-1 text-center py-3 rounded-xl bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
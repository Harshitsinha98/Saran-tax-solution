import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  ArrowUp,
  MapPin,
  Mail,
  Clock,
  Heart,
  Megaphone,
  Code2,
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-dark-50 border-t border-dark-100">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* CTA Banner — keeps gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-violet opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to Simplify Your Finances?
            </h3>
            <p className="text-white/75 mb-8 max-w-xl mx-auto">
              Join 1000+ businesses that trust Saran Tax Solution for their financial needs.
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919852239281"
                className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary-700 font-semibold hover:bg-white/90 transition-all shadow-xl"
              >
                <span className="absolute inset-0 bg-primary-500/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                <Phone size={18} className="relative z-10" />
                <span className="relative z-10">Call Now</span>
              </a>
              <a
                href="https://wa.me/+919852239281"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-sm">
                <span className="text-lg font-display font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-lg font-display font-bold text-dark-900">Saran</span>
                <span className="text-lg font-display font-light text-dark-500 ml-1">Tax Solution</span>
              </div>
            </div>
            <p className="text-sm text-dark-600 leading-relaxed">
              Your trusted financial partner. Expert GST, ITR, TDS, and accounting services
              with the precision of a tax lawyer.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-dark-900 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['GST Services', 'ITR Filing', 'TDS Services', 'Digital Signature', 'Accounting', 'Balance Sheet'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-sm text-dark-600 hover:text-primary-600 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-400 group-hover:scale-150 transition-transform" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-dark-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-600">
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-primary-500 flex-shrink-0" />
                Saran (Chapra), Bihar
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary-500 flex-shrink-0" />
                +91 98522 39281
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-primary-500 flex-shrink-0" />
                info@sarantaxsolution.com
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="text-primary-500 flex-shrink-0" />
                Mon - Sat: 9AM - 7PM
              </li>
            </ul>
          </div>
        </div>

        {/* Agency / Developer Credit */}
        <div className="border-t border-dark-200 pt-6 pb-2 mb-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-500 text-center sm:text-left">
            <p className="flex items-center gap-1.5">
              Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> by{' '}
              <span className="font-semibold text-dark-700">Harshit Sinha</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              <a
                href="tel:+919653043939"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <Megaphone size={13} className="flex-shrink-0" />
                Google &amp; Meta Ads: +91 96530 43939
              </a>
              <span className="hidden sm:inline text-dark-300">•</span>
              <a
                href="tel:+919653043939"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <Code2 size={13} className="flex-shrink-0" />
                Want a website like this? Contact +91 96530 43939
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <p className="text-xs text-dark-400">
              © 2024 Saran Tax Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-dark-400">
              <Link to="/privacy-policy" className="hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-dark-300">•</span>
              <Link to="/terms-conditions" className="hover:text-primary-600 transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-dark-300">•</span>
              <Link to="/sitemap" className="hover:text-primary-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white border border-dark-200 shadow-sm flex items-center justify-center text-dark-500 hover:text-dark-900 hover:bg-dark-100 hover:border-dark-300 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

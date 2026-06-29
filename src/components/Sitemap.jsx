import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Update these paths/hashes if your actual routes or section IDs differ.
const groups = [
  {
    title: 'Main Sections',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Why Choose Us', href: '/#why-us' },
      { label: 'About', href: '/#about' },
      { label: 'Our Process', href: '/#process' },
      { label: 'Client Reviews', href: '/#testimonials' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Team',
    links: [{ label: 'Meet the Team', href: '/team' }],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Connect With Us',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/sarantaxsolution1' },
      { label: 'Instagram', href: 'https://www.instagram.com/sarantaxsolution/' },
      {
        label: 'Google Reviews',
        href: 'https://business.google.com/n/554035199062117018/profile?hl=en-GB&fid=1006603353363701616',
      },
    ],
  },
]

function SiteLink({ href, label }) {
  const isExternal = href.startsWith('http')
  const className =
    'flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm text-dark-600 hover:text-primary-700 hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-200 group'

  const content = (
    <>
      <span className="font-medium">{label}</span>
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
    </>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  )
}

export default function Sitemap() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-400/15 rounded-full blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-emerald-400/15 rounded-full blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 mb-4"
          >
            Navigation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-4"
          >
            Site<span className="gradient-text">map</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-dark-500 max-w-xl mx-auto"
          >
            Every page and section of our website, in one place.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
                className="bg-white border border-dark-100 shadow-sm rounded-2xl p-5"
              >
                <h2 className="text-sm font-display font-semibold text-dark-900 uppercase tracking-wider mb-2 px-1">
                  {group.title}
                </h2>
                <div className="flex flex-col gap-1">
                  {group.links.map((link) => (
                    <SiteLink key={link.label} href={link.href} label={link.label} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

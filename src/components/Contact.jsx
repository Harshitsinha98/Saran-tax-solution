import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  Send,
  User,
  ChevronDown,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'

const quickActions = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Us',
    sub: 'Usually replies in minutes',
    value: '+91 98522 39281',
    href: 'https://wa.me/+919852239281',
    classes: 'bg-green-600 hover:bg-green-700 shadow-green-500/30',
  },
  {
    icon: Phone,
    label: 'Call Us',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    value: '+91 98522 39281',
    href: 'tel:+919852239281',
    classes: 'bg-primary-600 hover:bg-primary-700 shadow-primary-500/30',
  },
]

const infoRows = [
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'QQM5+J9 Chapra, Bihar',
    href: 'https://www.google.com/maps/search/?api=1&query=QQM5%2BJ9+Chapra%2C+Bihar',
    iconBg: 'bg-violet-50 border-violet-200',
    iconColor: 'text-violet-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sts841301@gmail.com',
    href: 'mailto:sts841301@gmail.com',
    iconBg: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    href: null,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMsg = `Hi, I'm ${formData.name}. I need help with ${formData.service}. ${formData.message}`
    window.open(`https://wa.me/+919852239281?text=${encodeURIComponent(whatsappMsg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Contact us today for a free consultation. We're here to simplify your tax journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-dark-100 shadow-sm rounded-3xl p-6 md:p-8"
          >
            <p className="text-sm text-dark-500 mb-6">
              Fill in your details and we'll get back to you on WhatsApp within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-dark-700 mb-2 font-medium">Your Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all duration-300 shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-dark-700 mb-2 font-medium">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all duration-300 shadow-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-dark-700 mb-2 font-medium">Service Needed</label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white border border-dark-200 text-dark-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all duration-300 appearance-none shadow-sm"
                  >
                    <option value="" className="text-dark-400">Select a service</option>
                    <option value="GST Services">GST Services</option>
                    <option value="ITR Filing">ITR Filing</option>
                    <option value="TDS Services">TDS Services</option>
                    <option value="Digital Signature">Digital Signature</option>
                    <option value="Accounting">Accounting Services</option>
                    <option value="Balance Sheet">Balance Sheet Preparation</option>
                    <option value="Other">Other Services</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-dark-700 mb-2 font-medium">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all duration-300 resize-none shadow-sm"
                  placeholder="Tell us more about your requirement..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-3 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-600 text-white rounded-xl px-6 py-4 font-semibold shadow-lg shadow-green-500/30'
                    : 'btn-primary'
                }`}
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
              >
                {submitted ? <CheckCircle2 size={18} /> : <Send size={18} />}
                <span>{submitted ? 'Redirecting to WhatsApp...' : 'Send via WhatsApp'}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-dark-100 shadow-sm rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header strip */}
            <div className="relative px-6 md:px-8 pt-7 pb-6 bg-gradient-to-br from-primary-600 to-primary-700 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-white font-display font-semibold text-lg">Saran Tax Solution</p>
                  <p className="text-primary-100 text-xs mt-0.5">A Team of CA &amp; Advocates</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-white/15 border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online now
                </span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-6 md:p-8 pb-2">
              {quickActions.map((action) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-white shadow-lg transition-colors duration-300 ${action.classes}`}
                >
                  <action.icon size={20} className="flex-shrink-0" />
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold leading-tight">{action.label}</p>
                    <p className="text-[11px] text-white/80 leading-tight truncate">{action.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Info rows */}
            <div className="px-6 md:px-8 pt-4 pb-6 space-y-1">
              {infoRows.map((item) => {
                const Wrapper = item.href ? motion.a : motion.div
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith('http') ? '_blank' : undefined,
                          rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                        }
                      : {})}
                    whileHover={item.href ? { x: 3 } : undefined}
                    className={`group flex items-center gap-4 py-3 ${
                      item.href ? 'cursor-pointer' : ''
                    } border-b border-dark-100 last:border-0`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} border flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} className={item.iconColor} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-dark-500 mb-0.5">{item.label}</p>
                      <p className="font-semibold text-dark-900 text-sm truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight
                        size={15}
                        className="text-dark-300 group-hover:text-primary-600 transition-colors flex-shrink-0"
                      />
                    )}
                  </Wrapper>
                )
              })}
            </div>

            {/* Map */}
            <div className="relative mx-6 md:mx-8 mb-6 md:mb-8 rounded-2xl overflow-hidden border border-dark-100 group">
              <iframe
                title="Saran Tax Solution office location"
                src="https://www.google.com/maps?q=QQM5%2BJ9+Chapra%2C+Bihar&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=QQM5%2BJ9+Chapra%2C+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-medium text-dark-900 bg-white/95 border border-dark-100 rounded-lg px-3 py-1.5 shadow-sm hover:bg-white transition-colors"
              >
                Get Directions <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
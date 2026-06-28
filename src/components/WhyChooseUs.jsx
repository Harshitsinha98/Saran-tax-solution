import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Shield, Zap, IndianRupee, ThumbsUp, Clock } from 'lucide-react'

const stats = [
  { number: 1000, suffix: '+', label: 'Happy Clients', icon: ThumbsUp },
  { number: 5, suffix: '+', label: 'Years Experience', icon: Clock },
  { number: 99, suffix: '%', label: 'Compliance Rate', icon: Shield },
  { number: 50, suffix: 'K+', label: 'Returns Filed', icon: Zap },
]

const reasons = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Led by an experienced tax lawyer, every filing is backed by legal expertise and strict compliance standards.',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description: 'Quick turnaround times with efficient processing. Most filings completed within 24-48 hours.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Premium services starting at just ₹499. Quality financial services accessible to every business.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: '1000+ businesses trust us across Bihar, UP, NCR and nearby states. Your success is our priority.',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-200/20 rounded-full blur-[120px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            The <span className="gradient-text-gold">Trusted Choice</span> for
            <br className="hidden md:block" /> Financial Excellence
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            More than just tax filing — we are your strategic financial partner committed to your business growth.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 md:p-8 rounded-2xl glass-light hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center">
                <stat.icon size={20} className="text-primary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-1">
                {statsInView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                    separator=","
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-sm text-dark-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group flex gap-5 p-6 md:p-8 rounded-2xl glass-light hover:shadow-md hover:border-primary-200 transition-all duration-500"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-violet-100 border border-dark-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon size={22} className="text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
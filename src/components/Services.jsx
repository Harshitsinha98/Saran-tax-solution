import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Store,
  UtensilsCrossed,
  PenTool,
  Globe,
  BarChart3,
  ClipboardList,
  BookOpen,
  Award,
  Briefcase,
} from 'lucide-react'

const services = [
  {
    icon: ClipboardCheck,
    title: 'GST Registration',
    description: 'Get your business GST registered quickly and correctly, with full guidance on documentation and compliance from day one.',
    price: '₹599/-',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-100',
    hoverTint: 'from-blue-50 to-transparent',
    borderColor: 'group-hover:border-blue-300',
  },
  {
    icon: FileSpreadsheet,
    title: 'GST Return Filing',
    description: 'Monthly, quarterly, and annual GST return filing handled on time, every time, so you stay penalty-free and compliant.',
    price: 'Starts at ₹299/-',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50 border-sky-100',
    hoverTint: 'from-sky-50 to-transparent',
    borderColor: 'group-hover:border-sky-300',
  },
  {
    icon: FileText,
    title: 'Income Tax Return (ITR) Filing',
    description: 'Expert ITR filing and tax planning services. Your trusted ITR expert for maximum refunds and full compliance.',
    price: 'Starts at ₹599/-',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
    hoverTint: 'from-emerald-50 to-transparent',
    borderColor: 'group-hover:border-emerald-300',
  },
  {
    icon: Store,
    title: 'MSME / Udyam Registration',
    description: 'Register your business under MSME/Udyam to unlock government benefits, subsidies, and easier access to business loans.',
    price: '₹299/-',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50 border-orange-100',
    hoverTint: 'from-orange-50 to-transparent',
    borderColor: 'group-hover:border-orange-300',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food License (FSSAI)',
    description: 'Hassle-free FSSAI food license registration for restaurants, shops, and food businesses with complete paperwork support.',
    price: '₹999/-',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-100',
    hoverTint: 'from-rose-50 to-transparent',
    borderColor: 'group-hover:border-rose-300',
  },
  {
    icon: PenTool,
    title: 'Digital Signature Certificate (DSC)',
    description: 'Fast Class 3 Digital Signature Certificate registration and renewal for secure e-filing and tenders.',
    price: '₹999/-',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-100',
    hoverTint: 'from-amber-50 to-transparent',
    borderColor: 'group-hover:border-amber-300',
  },
  {
    icon: Globe,
    title: 'IEC Code Registration',
    description: 'Get your Import Export Code registered smoothly so you can start trading internationally without delays.',
    price: '₹1,999/-',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-100',
    hoverTint: 'from-indigo-50 to-transparent',
    borderColor: 'group-hover:border-indigo-300',
  },
  {
    icon: BarChart3,
    title: 'Balance Sheet Preparation',
    description: 'Professional balance sheet preparation for loans — projected financial statements, CMA data, and P&L accounts with 100% accuracy.',
    price: '₹1,999/-',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50 border-cyan-100',
    hoverTint: 'from-cyan-50 to-transparent',
    borderColor: 'group-hover:border-cyan-300',
  },
  {
    icon: ClipboardList,
    title: 'Project Report',
    description: 'Bank-ready project reports prepared for loans and funding, with realistic projections that lenders trust.',
    price: '₹1,999/-',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-100',
    hoverTint: 'from-violet-50 to-transparent',
    borderColor: 'group-hover:border-violet-300',
  },
  {
    icon: BookOpen,
    title: 'Accounting Services',
    description: 'Reliable bookkeeping and accounting compliance. Let our certified accountants manage your books so you can focus on growth.',
    price: 'Starts at ₹6,999/-',
    iconColor: 'text-lime-600',
    iconBg: 'bg-lime-50 border-lime-100',
    hoverTint: 'from-lime-50 to-transparent',
    borderColor: 'group-hover:border-lime-300',
  },
  {
    icon: Award,
    title: 'Trademark Registration',
    description: 'Protect your brand name and logo with end-to-end trademark registration and filing support.',
    price: '₹6,999/-',
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50 border-pink-100',
    hoverTint: 'from-pink-50 to-transparent',
    borderColor: 'group-hover:border-pink-300',
  },
  {
    icon: Briefcase,
    title: 'Company Registration',
    description: 'Complete company registration — Private Limited, LLP, or Partnership — handled start to finish by our CA & Advocate team.',
    price: '₹9,999/-',
    iconColor: 'text-primary-600',
    iconBg: 'bg-primary-50 border-primary-100',
    hoverTint: 'from-primary-50 to-transparent',
    borderColor: 'group-hover:border-primary-300',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-200/20 rounded-full blur-[150px]" />
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
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Comprehensive Tax &{' '}
            <span className="gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            From GST registration to balance sheet preparation, we handle every aspect of your
            financial compliance with precision and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-3xl p-8 bg-white border border-dark-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${service.borderColor}`}
            >
              {/* Gradient tint on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverTint} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  <service.icon size={24} className={service.iconColor} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-lg">
                    {service.price}
                  </span>
                  <motion.a
                    href={`https://wa.me/+919852239281?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark-500 hover:text-primary-600 flex items-center gap-1 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Get Started →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
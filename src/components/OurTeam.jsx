import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Scale,
  Calculator,
  Quote,
  Facebook,
  Instagram,
  Star,
  Phone,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'

const team = [
  {
    name: 'Shivam Srivastava',
    credentials: 'LL.B.',
    role: 'Tax Lawyer & Consultant',
    badge: 'Founder',
    image:
      'https://sarantaxsolution.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-31-at-7.03.40-PM.jpeg',
    icon: Scale,
    iconBg: 'bg-primary-50 border-primary-200',
    iconColor: 'text-primary-600',
    badgeClasses: 'bg-primary-50 text-primary-700 border-primary-200',
    bio: [
      "I'm a Tax Lawyer and Consultant, and the founder of Saran Tax Solution. I specialise in tax and legal consultancy for individuals, professionals, and businesses — with a focus on accuracy, transparency, and compliance.",
      'With a strong grounding in Income Tax law, GST, and legal procedure, I help clients manage their tax responsibilities efficiently and confidently, offering practical solutions and ethical advice tailored to every client.',
    ],
  },
  {
    name: 'Intesar Alam',
    credentials: 'B.Com',
    role: 'Accountant',
    badge: null,
    image:
      'https://sarantaxsolution.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-31-at-6.34.07-PM.jpeg',
    icon: Calculator,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    badgeClasses: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bio: [
      "I'm an Accounting and Compliance professional with strong experience across GST, TDS, payroll, and end-to-end accounting — with hands-on expertise in Zoho Books, Zoho Payroll, and Tally.",
      'My work covers GST returns, TDS compliance, payroll processing, data migration, and reconciliation of balance sheets and P&L accounts, always with an eye for accuracy and timely compliance.',
    ],
  },
]

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/sarantaxsolution1', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/sarantaxsolution/', label: 'Instagram' },
  {
    icon: Star,
    href: 'https://business.google.com/n/554035199062117018/profile?hl=en-GB&fid=1006603353363701616',
    label: 'Google Reviews',
  },
]

export default function OurTeam() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
            Meet The Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-5"
          >
            The People Behind <span className="gradient-text">Your Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-dark-500 max-w-2xl mx-auto"
          >
            Real expertise, real accountability — get to know the people handling your taxes and compliance.
          </motion.p>
        </div>
      </section>

      {/* Team + Vision */}
      <section id="team" className="section-padding relative overflow-hidden pt-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          {/* Team members */}
          <div ref={ref} className="space-y-10 md:space-y-12 mb-20">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12 bg-white border border-dark-100 shadow-sm rounded-3xl p-6 md:p-10`}
              >
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden border border-dark-100 shadow-md">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${member.iconBg} border flex items-center justify-center`}>
                      <member.icon size={18} className={member.iconColor} />
                    </div>
                    {member.badge && (
                      <span
                        className={`text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border ${member.badgeClasses}`}
                      >
                        {member.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-1">
                    {member.name}{' '}
                    <span className="text-dark-400 font-normal text-lg">({member.credentials})</span>
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  {member.bio.map((para, j) => (
                    <p key={j} className="text-dark-600 text-sm leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-100 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto mb-16"
          >
            <Quote size={40} className="text-primary-200 mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">Our Vision</h3>
            <p className="text-dark-600 leading-relaxed mb-3">
              We believe tax and legal compliance should feel simple, honest, and practical — never
              complicated or stressful — when handled with the right knowledge and guidance.
            </p>
            <p className="text-dark-600 leading-relaxed">
              Our goal is to be a trusted name in taxation and legal consultancy, built on transparent
              advice, timely support, and a personal commitment to every client's confidence and security.
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-20"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-dark-600 hover:text-primary-600 hover:shadow-md transition-all duration-300"
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-3">
              Talk to the Team Directly
            </h3>
            <p className="text-dark-500 max-w-xl mx-auto mb-8">
              Have a question about your filing or compliance? Reach out and we'll guide you personally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+919852239281"
                className="btn-primary flex items-center gap-3 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={18} />
                <span>Call Now</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://wa.me/+919852239281"
                className="btn-secondary flex items-center gap-3 group !border-green-200 !bg-green-50 hover:!bg-green-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={18} className="text-green-600" />
                <span className="text-green-700 font-semibold">WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

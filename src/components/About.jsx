import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Scale,
  Calculator,
  GraduationCap,
  MapPin,
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
    role: 'Founder & Tax Lawyer',
    eyebrowClasses: 'text-primary-700 bg-primary-50 border-primary-200',
    location: 'Saran (Chapra), Bihar',
    tags: ['Income Tax Law', 'GST Advisory', 'Legal Consultancy'],
    image: '/shivam-srivastava.jpg',
    avatarGradient: 'from-primary-500 to-primary-700',
    pillClasses: [
      'bg-primary-50 border-primary-200 text-primary-700',
      'bg-violet-50 border-violet-200 text-violet-700',
      'bg-emerald-50 border-emerald-200 text-emerald-700',
    ],
    floatingTop: { icon: Scale, label: 'Tax Law Expert', iconColor: 'text-primary-600' },
    floatingBottom: { icon: GraduationCap, label: 'LL.B. Qualified', iconColor: 'text-primary-600' },
    bio: [
      "I'm a Tax Lawyer and Consultant, and the founder of Saran Tax Solution. I specialise in tax and legal consultancy for individuals, professionals, and businesses — with a focus on accuracy, transparency, and compliance.",
      'With a strong grounding in Income Tax law, GST, and legal procedure, I help clients manage their tax responsibilities efficiently and confidently, offering practical solutions and ethical advice tailored to every client.',
    ],
  },
  {
    name: 'Intesar Alam',
    credentials: 'B.Com',
    role: 'Accountant',
    eyebrowClasses: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    location: 'Saran (Chapra), Bihar',
    tags: ['GST & TDS', 'Payroll Expert', 'Zoho & Tally'],
    image: '/intesar-alam.jpg',
    avatarGradient: 'from-emerald-500 to-emerald-700',
    pillClasses: [
      'bg-emerald-50 border-emerald-200 text-emerald-700',
      'bg-primary-50 border-primary-200 text-primary-700',
      'bg-violet-50 border-violet-200 text-violet-700',
    ],
    floatingTop: { icon: Calculator, label: 'Accounting Expert', iconColor: 'text-emerald-600' },
    floatingBottom: { icon: GraduationCap, label: 'B.Com Qualified', iconColor: 'text-primary-600' },
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
          <div ref={ref} className="space-y-20 md:space-y-28 mb-20">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Visual card */}
                <div className={`relative ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    {/* Main card */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50 via-white to-violet-50 border border-dark-100 shadow-xl shadow-dark-200/25 p-8 md:p-12">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-violet/5" />

                      <div className="relative z-10 text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary-500/30">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <h3 className="text-2xl font-display font-bold text-dark-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-4">{member.credentials}</p>

                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                          {member.tags.map((tag, ti) => (
                            <span
                              key={tag}
                              className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${member.pillClasses[ti % member.pillClasses.length]}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-center gap-2 text-dark-500 text-sm">
                          <MapPin size={14} />
                          <span>{member.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating badges */}
                    <motion.div
                      className="absolute -top-4 -right-4 md:top-4 md:-right-6"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="bg-white border border-dark-100 shadow-lg rounded-xl p-3">
                        <div className="flex items-center gap-2">
                          <member.floatingTop.icon size={16} className={member.floatingTop.iconColor} />
                          <span className="text-xs font-semibold text-dark-800">{member.floatingTop.label}</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-6"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                      <div className="bg-white border border-dark-100 shadow-lg rounded-xl p-3">
                        <div className="flex items-center gap-2">
                          <member.floatingBottom.icon size={16} className={member.floatingBottom.iconColor} />
                          <span className="text-xs font-semibold text-dark-800">{member.floatingBottom.label}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border mb-4 ${member.eyebrowClasses}`}
                  >
                    {member.role}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-6">
                    Meet <span className="gradient-text">{member.name.split(' ')[0]}</span>
                  </h3>

                  <div className="space-y-4 text-dark-600 leading-relaxed">
                    {member.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
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
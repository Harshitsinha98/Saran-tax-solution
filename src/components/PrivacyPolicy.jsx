import { motion } from 'framer-motion'

// Standard privacy policy content for a tax/accounting consultancy.
// NOTE: This is template content, not legal advice. Since this page makes
// binding representations about how client data (including financial and
// tax documents) is handled, it's worth a quick review by a lawyer or CA
// before publishing, especially around data retention and any specific
// regulatory obligations that apply to your practice.
const sections = [
  {
    title: '1. Introduction',
    content: [
      'Saran Tax Solution ("we", "our", "us") is committed to protecting the privacy of every client and visitor who interacts with our website or services. This Privacy Policy explains what information we collect, why we collect it, and how we use, store, and protect it.',
      'By using our website or engaging our tax, GST, accounting, or legal consultancy services, you agree to the practices described in this policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: ['We may collect the following types of information:'],
    list: [
      'Personal details such as your name, phone number, email address, and address, when you contact us or fill out a form.',
      'Financial and tax-related documents you voluntarily share with us for the purpose of filing GST, ITR, TDS returns, or other services.',
      'Communication records, including messages sent via WhatsApp, phone calls, or email.',
      'Technical data such as browser type, device information, and pages visited, collected automatically through cookies and similar technologies.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: ['We use the information we collect to:'],
    list: [
      'Provide, manage, and improve our tax, GST, accounting, and legal consultancy services.',
      'Communicate with you regarding your filings, deadlines, and queries.',
      'Respond to enquiries submitted through our website, phone, or WhatsApp.',
      'Comply with applicable legal and regulatory requirements.',
      'Improve our website experience and understand how visitors use our services.',
    ],
  },
  {
    title: '4. Sharing of Information',
    content: [
      'We do not sell or rent your personal information to third parties. We may share information only in the following circumstances:',
    ],
    list: [
      'With government departments and portals (such as the GST Portal or Income Tax e-filing portal) strictly for the purpose of completing your filings.',
      'With trusted service providers (such as hosting providers, accounting software like Zoho Books or Tally, or communication tools like WhatsApp Business) who help us deliver our services, under appropriate confidentiality obligations.',
      'When required by law, court order, or a government authority.',
    ],
  },
  {
    title: '5. Cookies & Website Analytics',
    content: [
      'Our website may use cookies and similar tracking technologies to understand visitor behaviour and improve user experience. You can disable cookies through your browser settings, though some features of the website may not function as intended if you do.',
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'We take reasonable administrative, technical, and physical measures to protect your personal and financial information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain your personal and financial information only for as long as necessary to provide our services and to comply with statutory record-keeping requirements under applicable tax and accounting laws.',
    ],
  },
  {
    title: '8. Your Rights',
    content: ['You have the right to:'],
    list: [
      'Request access to the personal information we hold about you.',
      'Request correction of any inaccurate or incomplete information.',
      'Request deletion of your information, subject to our legal and regulatory record-keeping obligations.',
      'Withdraw consent for non-essential communication at any time.',
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      'Our services are intended for individuals who are at least 18 years of age. We do not knowingly collect personal information from minors.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any changes will be posted on this page with a revised "Last Updated" date.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us:',
    ],
    list: [
      'Phone: +91 98522 39281',
      'Email: info@sarantaxsolution.com',
      'Address: Saran (Chapra), Bihar',
    ],
  },
]

export default function PrivacyPolicy() {
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
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-4"
          >
            Privacy <span className="gradient-text">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-dark-500 max-w-xl mx-auto"
          >
            Last updated: June 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white border border-dark-100 shadow-sm rounded-3xl p-8 md:p-12 space-y-10"
          >
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl md:text-2xl font-display font-bold text-dark-900 mb-3">
                  {s.title}
                </h2>
                {s.content.map((p, i) => (
                  <p key={i} className="text-dark-600 leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="space-y-2 mt-3">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-dark-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

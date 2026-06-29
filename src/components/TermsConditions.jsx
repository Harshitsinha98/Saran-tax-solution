import { motion } from 'framer-motion'

// Standard terms & conditions content for a tax/accounting/legal consultancy.
// NOTE: This is template content, not legal advice — worth a quick review
// by a lawyer or CA before publishing, since it makes binding statements
// about liability, fees, and client obligations.
const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing this website or engaging Saran Tax Solution ("we", "our", "us") for any service, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.',
    ],
  },
  {
    title: '2. Our Services',
    content: [
      'Saran Tax Solution provides tax, legal, and accounting consultancy services including but not limited to:',
    ],
    list: [
      'GST registration, returns, and advisory',
      'Income Tax Return (ITR) filing',
      'TDS compliance and returns',
      'Digital Signature Certificate (DSC) assistance',
      'Accounting, bookkeeping, and payroll processing',
      'Balance sheet and financial statement preparation',
    ],
  },
  {
    title: '3. Professional Advice Disclaimer',
    content: [
      'While our team includes qualified professionals, the information provided on this website is for general informational purposes only and does not constitute formal legal or financial advice. Specific outcomes (such as approval of filings, refunds, or loan sanctions) depend on government authorities, banks, or other third parties and cannot be guaranteed by us.',
      'You should consult with us directly regarding your specific circumstances before making any financial or legal decisions.',
    ],
  },
  {
    title: '4. Client Responsibilities',
    content: ['As a client, you agree to:'],
    list: [
      'Provide accurate, complete, and timely information and documents required for your filings.',
      'Review documents and filings shared with you and promptly flag any discrepancies.',
      'Make payments for services as agreed, on time.',
      'Inform us promptly of any changes relevant to your tax or compliance status.',
    ],
  },
  {
    title: '5. Fees & Payment',
    content: [
      'Service fees are communicated to clients prior to engagement and may vary based on the complexity and scope of work. Payment terms will be agreed upon at the time of engagement. Government fees, penalties, or third-party charges (if any) are separate from our professional fees and are payable by the client.',
    ],
  },
  {
    title: '6. Confidentiality',
    content: [
      'We treat all client information and documents as strictly confidential and use them solely for the purpose of providing the agreed services, except where disclosure is required by law or with your consent.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'Saran Tax Solution shall not be held liable for any indirect, incidental, or consequential loss arising from delays, errors, or omissions caused by incorrect or incomplete information provided by the client, or from actions taken by government departments, banks, or other third parties beyond our reasonable control.',
    ],
  },
  {
    title: '8. Intellectual Property',
    content: [
      'All content on this website, including text, graphics, logos, and design, is the property of Saran Tax Solution unless otherwise stated, and may not be reproduced or used without prior written permission.',
    ],
  },
  {
    title: '9. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites (such as government portals or social media platforms). We are not responsible for the content, accuracy, or privacy practices of these external websites.',
    ],
  },
  {
    title: '10. Termination of Services',
    content: [
      'Either party may discontinue an ongoing engagement by providing reasonable written notice. Fees for work already completed up to the point of termination remain payable.',
    ],
  },
  {
    title: '11. Governing Law & Jurisdiction',
    content: [
      'These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts at Saran (Chapra), Bihar.',
    ],
  },
  {
    title: '12. Changes to These Terms',
    content: [
      'We may revise these Terms and Conditions from time to time. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.',
    ],
  },
  {
    title: '13. Contact Us',
    content: ['For any questions regarding these Terms and Conditions, please contact us:'],
    list: [
      'Phone: +91 98522 39281',
      'Email: info@sarantaxsolution.com',
      'Address: Saran (Chapra), Bihar',
    ],
  },
]

export default function TermsConditions() {
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
            Terms &amp; <span className="gradient-text">Conditions</span>
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

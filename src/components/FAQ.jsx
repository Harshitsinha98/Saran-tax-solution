import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Saran Tax Solution provide?',
    answer: 'We provide comprehensive tax and financial services including GST Registration & Filing, Income Tax Return (ITR) Filing, TDS Return Filing, Digital Signature Certificates, Accounting & Bookkeeping, Balance Sheet Preparation, Company Registration, and Tax Notice handling.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our services are designed to be affordable for businesses of all sizes. GST Registration and ITR Filing start at just ₹599/-, Food License registration starts at ₹999/-, Digital Signature starts at ₹999/-, and Balance Sheet preparation starts at ₹1,999/-. Contact us for a custom quote based on your specific needs.',
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We are based in Saran (Chapra), Bihar and serve clients across Bihar, Uttar Pradesh, NCR (Delhi-NCR), and nearby states. Since most of our work is done digitally, we can assist clients from anywhere in India.',
  },
  {
    question: 'How quickly can you file my returns?',
    answer: 'Most standard filings are completed within 24-48 hours after receiving all required documents. For urgent cases, we offer same-day processing. Complex filings or tax notices may take 3-5 business days depending on the nature of the case.',
  },
  {
    question: 'Is my data safe with you?',
    answer: 'Absolutely. We follow strict data privacy protocols. All documents are handled confidentially, and we use secure channels for document sharing. As a law-qualified professional firm, we are bound by professional ethics and client confidentiality standards.',
  },
  {
    question: 'Do you handle tax notices and legal matters?',
    answer: 'Yes! Unlike regular CAs, our founder Shivam Srivastava is a qualified Tax Lawyer (LL.B.). We provide expert legal aid for tax notices, GST notices, and any compliance-related legal matters with proper representation.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out to us via WhatsApp or call at +91 9852239281. Our team will understand your requirements, guide you on the documents needed, and get your work started immediately. The entire process can be done remotely.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[130px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-violet-700 bg-violet-50 border border-violet-200 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. If you can't find what you're looking for,
            feel free to reach out directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-primary-50 border-primary-200 shadow-md shadow-primary-100/60'
                    : 'bg-white border-dark-100 shadow-sm hover:border-dark-200 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-dark-900 pr-4 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className="text-dark-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-dark-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
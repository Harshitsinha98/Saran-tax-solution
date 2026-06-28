import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, FileCheck, Settings, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'Reach out via call or WhatsApp. We understand your requirements and provide expert guidance on the best approach.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Documentation',
    description: 'Share the required documents securely. Our team verifies everything and prepares your filing with precision.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Processing',
    description: 'Our experts handle all the complex work — filing, compliance checks, and government portal submissions.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Completion',
    description: 'Receive confirmation of successful filing. We provide acknowledgment receipts and ongoing support.',
  },
]

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-accent-emerald/5 rounded-full blur-[130px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            Simple <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Getting your taxes filed has never been easier. Our streamlined process ensures
            a smooth, hassle-free experience from start to finish.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-400/60 via-accent-violet/60 to-accent-emerald/60 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-400/60 via-accent-violet/60 to-accent-emerald/60 md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white z-10 shadow-md shadow-primary-500/30" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="group p-6 rounded-2xl bg-white border border-dark-100 shadow-sm hover:border-primary-200 hover:shadow-md hover:shadow-primary-100/50 transition-all duration-500"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-violet-100 border border-dark-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon size={20} className="text-primary-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-primary-700 bg-primary-100 border border-primary-200 px-2 py-0.5 rounded font-semibold">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-lg font-display font-semibold text-dark-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-dark-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
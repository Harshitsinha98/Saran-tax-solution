import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Phone, MessageCircle, Shield, Users, Award, CheckCircle2, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background - Adjusted for Light Theme */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-emerald-400/15 rounded-full blur-[80px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern - Dark lines on light background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Radial gradient overlay - Fades to slate-50 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f8fafc_70%)]" />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-600 font-medium">Trusted by 1000+ Businesses Across Bihar & UP</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900"
          >
            Focus on Your Business,
            <br />
            <span className="gradient-text">Not the Paperwork.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 text-balance"
          >
            Your one-stop solution for all tax-related needs. Expert GST, ITR, TDS services 
            with the precision of a tax lawyer and the care of a trusted partner.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="tel:+919852239281"
              className="btn-primary relative overflow-hidden group flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">Call Now</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Adjusted WhatsApp Button for Light Theme */}
            <motion.a
              href="https://wa.me/+919852239281"
              className="btn-secondary flex items-center gap-3 group !border-green-200 !bg-green-50 hover:!bg-green-100"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} className="text-green-600" />
              <span className="text-green-700 font-semibold">WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: Shield, text: '100% Compliance', color: 'text-blue-600' },
              { icon: Users, text: '1000+ Clients', color: 'text-emerald-600' },
              { icon: Award, text: 'Expert Tax Lawyer', color: 'text-amber-500' },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              >
                <item.icon size={18} className={item.color} />
                <span className="text-slate-600 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements - Adjusted to Light Theme Cards */}
        <motion.div
          className="absolute top-32 right-10 hidden xl:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass-light rounded-2xl p-4 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">GST Return Filed</p>
                <p className="text-sm font-bold text-slate-800">Successfully</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 hidden xl:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="glass-light rounded-2xl p-4 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Zap size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Starts at just</p>
                <p className="text-sm font-bold text-slate-800">₹499/-</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#services"
          className="hidden md:flex flex-col items-center gap-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-primary-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 1.4, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <span className="text-[11px] uppercase tracking-widest">Explore</span>
          <ArrowDown size={16} />
        </motion.a>
      </div>

      {/* Bottom gradient fade - fades into slate-50 instead of dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  )
}
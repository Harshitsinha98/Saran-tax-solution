import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1800
    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct >= 100) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent-violet/8 rounded-full blur-[80px] animate-float" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl shadow-primary-500/25 ring-4 ring-white">
            <img
              src="/logo.png"
              alt="Saran Tax Solution"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-3 border-2 border-dashed border-primary-400/40 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl font-display font-bold text-dark-900 mb-2">
            Saran Tax Solution
          </h1>
          <p className="text-dark-400 text-sm tracking-wider uppercase">
            A Team of CA & Advocates
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-48"
        >
          <div className="flex items-center justify-between text-[11px] text-dark-400 mb-1.5 tracking-wide">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1 bg-dark-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-violet rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
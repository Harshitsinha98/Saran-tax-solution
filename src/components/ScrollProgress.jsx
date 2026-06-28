import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest)
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #60a5fa)',
      }}
    />
  )
}
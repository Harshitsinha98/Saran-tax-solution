import { motion } from 'framer-motion'

// The real WhatsApp glyph (speech bubble + phone receiver), inline as SVG so
// no extra icon package is needed. Matches the standard "Chat on WhatsApp"
// badge WhatsApp's own brand guidelines recommend businesses use.
function WhatsAppIcon({ size = 24, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.95L2 22l5.2-1.36c1.44.79 3.07 1.21 4.84 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.27c-1.58 0-3.13-.43-4.47-1.23l-.32-.19-3.32.87.89-3.24-.21-.33A8.21 8.21 0 0 1 3.82 12c0-4.54 3.69-8.23 8.22-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.27-8.23 8.27zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.04-.39-1.99-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.41 1.01 2.57c.13.17 1.75 2.67 4.25 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/+919852239281"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 w-14 h-14 rounded-full bg-green-500/30 animate-ping" />
      
      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-shadow duration-300">
        <WhatsAppIcon size={26} className="text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </div>
    </motion.a>
  )
}
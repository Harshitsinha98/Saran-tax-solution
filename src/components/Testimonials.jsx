import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, BadgeCheck, RefreshCw, Quote } from 'lucide-react'

// ── Live data configuration ────────────────────────────────────────────────
// Place ID confirmed for Saran Tax Solution, Nehru Chowk, Chapra, Bihar.
// To go fully live: deploy app/api/google-reviews/route.js (see route.js)
// and set GOOGLE_PLACE_ID + GOOGLE_PLACES_API_KEY as env vars on your host.
// Until the API key is set, this component quietly falls back to the sample
// reviews below — nothing breaks, it just won't be "live" yet.
const GOOGLE_PLACE_ID = 'ChIJCe7lvZy7kjkRcN_1qmos-A0'
const REVIEWS_ENDPOINT = '/api/google-reviews'
const REFRESH_INTERVAL_MS = 60 * 60 * 1000 // re-check once an hour

// Real reviews copied from the Google Business Profile (only the ones that
// had actual written text — star-only reviews with no comment are excluded
// since there's nothing to show in the card). This list is the permanent
// source for review text; rating/total below get overridden live by the
// API, but the review text list itself stays static — Google's API only
// ever returns 5 reviews max, so a hand-curated list beats that limit for
// free, with zero ongoing subscription cost.
const FALLBACK_REVIEWS = [
  {
    author_name: 'Rajan Kumar',
    rating: 5,
    relative_time_description: 'Just now',
    text: 'Very professional and reliable service. My work was completed on time, and every step of the process was clearly explained. Overall, it was a very good experience. Highly satisfied!',
  },
  {
    author_name: 'Arpitraj Srivastava',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Very helpful place for Income Tax and GST related work. The process was explained clearly and work was completed on time. Highly recommended.',
  },
  {
    author_name: 'Akku Sri',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Very good service for class 3 digital signature. The whole process was explained clearly.',
  },
  {
    author_name: 'Kamala Devi',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Nice, fully satisfied with the quality of services delivered by this firm. Keep it up!',
  },
  {
    author_name: 'Yashvi Kapoor',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Great experience, filing done in 1 hour.',
  },
  {
    author_name: 'Radha Sinha',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Very good service.',
  },
  {
    author_name: 'Intesar',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Excellent service and good communication. They guide step by step and provide the right solution. Very reliable and trusted consultant service. Will surely recommend to others.',
  },
  {
    author_name: 'Ayush Nath',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'My GST registration was completed within just 2 hours. The entire process was quick and hassle-free. I received proper guidance and professional support throughout. Highly satisfied with the service.',
  },
  {
    author_name: 'Rohan Kumar',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Very good 👍 service and well response person.',
  },
  {
    author_name: 'Ritik Kumar',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Best office for tax related work.',
  },
  {
    author_name: 'Rishu Ranjan',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Very good service.',
  },
  {
    author_name: 'Amarnath Gupta',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Very fast service.',
  },
  {
    author_name: 'Harshit Sinha',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Saran Tax Solution is one of the leading GST service providers. With a team of experts, they handle all GST related queries very quickly and professionally. The charges are also very affordable, and once onboarded, their dedicated team ensures the needs are fulfilled from start to end.',
  },
  {
    author_name: 'Nikhil Pandit',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Great support and quick response. My work was done online without any hassle. Very convenient and trustworthy service.',
  },
  {
    author_name: 'Shreya Srivastava',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Very knowledgeable and polite person. Business compliance work was done properly and on time. Charges are reasonable and service quality is excellent.',
  },
  {
    author_name: 'Dipak',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Best place for hassle-free tax services and return filing — professional, reliable, and always on time. 😊',
  },
  {
    author_name: 'Hamid Raza',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'If you are looking for the best taxation service, you must go for Saran Tax Solution.',
  },
  {
    author_name: 'Basant Kr. Sharma',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Good service & response.',
  },
  {
    author_name: 'Krish Gaurav',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Awesome.',
  },
  {
    author_name: 'Aditya Kumar',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Okay.',
  },
  {
    author_name: 'Ranjana Sinha',
    rating: 5,
    relative_time_description: '7 months ago',
    text: 'My experience at this tax office was outstanding. The process to submit my documents was incredibly smooth and efficient. The office was clean, the wait time was minimal (less than 10 minutes), and the overall professionalism was commendable. A truly pleasant and effective experience.',
  },
  {
    author_name: 'Shiwangi Harshit Sinha',
    rating: 5,
    relative_time_description: '7 months ago',
    text: 'My visit to the tax office was excellent. I was assisted by a very knowledgeable and courteous officer who clarified all my queries regarding tax deductions. The entire process was efficient, and my work was completed in under 20 minutes. Highly recommend this office for their professional service. 🤗✌️',
  },
  {
    author_name: 'Uttam Kumar',
    rating: 5,
    relative_time_description: '7 months ago',
    text: 'It is a helpful and trustworthy firm for tax and financial services. They make filing taxes easy and give clear advice for managing money and business accounts. Keep growing 👍',
  },
  {
    author_name: 'Rohit Kumar',
    rating: 5,
    relative_time_description: '7 months ago',
    text: 'Good services in valuable times.',
  },
]

// Matches your actual Google Business Profile right now: 5.0★, 47 reviews.
// Once the live API is connected, this gets overridden automatically by
// the real numbers — but until then, visitors see the correct figures
// instead of placeholder ones.
const FALLBACK_SUMMARY = { rating: 5.0, total: 47 }

const AVATAR_GRADIENTS = [
  'from-blue-500 to-blue-700',
  'from-emerald-500 to-emerald-700',
  'from-violet-500 to-violet-700',
  'from-amber-500 to-amber-700',
  'from-rose-500 to-rose-700',
  'from-cyan-500 to-cyan-700',
]

function avatarGradient(name) {
  const idx = name.charCodeAt(0) % AVATAR_GRADIENTS.length
  return AVATAR_GRADIENTS[idx]
}

// Standard multi-colour "G" mark, used widely to attribute embedded Google
// review content (the same icon you see on "Sign in with Google" buttons).
function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  )
}

function Stars({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          style={{ fill: '#D4AF37', color: '#D4AF37' }}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS)
  const [summary, setSummary] = useState(FALLBACK_SUMMARY)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    let isMounted = true

    // Only the rating + total count are pulled live — the review text list
    // above is hand-curated and stays put, since Google's API caps reviews
    // at 5 regardless of how many the business actually has.
    const loadLiveRating = async () => {
      try {
        const res = await fetch(REVIEWS_ENDPOINT)
        if (!res.ok) throw new Error('Reviews endpoint not available yet')
        const data = await res.json()
        if (isMounted && typeof data.rating === 'number' && typeof data.total === 'number') {
          setSummary({ rating: data.rating, total: data.total })
          setIsLive(true)
        }
      } catch {
        // Backend not deployed yet, or the request failed — keep showing the
        // static rating/total so the section never breaks for visitors.
      }
    }

    loadLiveRating()
    const interval = setInterval(loadLiveRating, REFRESH_INTERVAL_MS)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length)
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  const active = reviews[current]

  const writeReviewHref = GOOGLE_PLACE_ID
    ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
    : 'https://www.google.com/search?q=Saran+Tax+Solution+Chapra+reviews'

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-[130px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 mb-4">
            <GoogleG size={14} /> Verified Google Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            What Our Clients Say on <span className="gradient-text">Google</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Real reviews, straight from our Google Business Profile. See why {summary.total}+ clients
            trust us with their financial needs.
          </p>
        </motion.div>

        {/* Google rating summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-10 bg-white border border-dark-100 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dark-50 to-white border border-dark-100 shadow-sm flex items-center justify-center flex-shrink-0">
              <GoogleG size={26} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-dark-900">
                  {summary.rating.toFixed(1)}
                </span>
                <Stars rating={Math.round(summary.rating)} size={15} />
              </div>
              <p className="text-xs text-dark-500 mt-0.5">
                {summary.total.toLocaleString('en-IN')}+ reviews on Google
              </p>
            </div>
          </div>
          <a
            href={writeReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 border border-primary-200 bg-primary-50 hover:bg-primary-100 rounded-xl px-4 py-2.5 transition-colors whitespace-nowrap"
          >
            <GoogleG size={14} /> Write a review
          </a>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-white border border-dark-100 shadow-md rounded-3xl p-6 md:p-10 overflow-hidden"
              >
                {/* Decorative watermark quote */}
                <Quote size={88} className="absolute -top-4 -right-2 text-primary-50 pointer-events-none" />

                {/* Reviewer row */}
                <div className="relative flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3 min-w-0">
                    {active.profile_photo_url ? (
                      <img
                        src={active.profile_photo_url}
                        alt={active.author_name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradient(active.author_name)} flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-sm`}
                      >
                        <span className="text-white font-semibold text-lg">
                          {active.author_name[0]}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-display font-semibold text-dark-900 truncate">
                          {active.author_name}
                        </p>
                        <BadgeCheck size={15} className="text-primary-500 flex-shrink-0" />
                      </div>
                      <p className="text-xs text-dark-500">{active.relative_time_description}</p>
                    </div>
                  </div>
                  <GoogleG size={20} />
                </div>

                <div className="relative">
                  <Stars rating={active.rating} />

                  <p className="text-base md:text-lg text-dark-700 leading-relaxed mt-4">
                    {active.text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-dark-700 hover:bg-dark-50 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Show review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-primary-500'
                        : 'w-2 bg-dark-200 hover:bg-dark-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-light flex items-center justify-center text-dark-700 hover:bg-dark-50 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            <p className="flex items-center justify-center gap-1.5 text-xs text-dark-400 mt-5">
              <RefreshCw size={12} className={isLive ? 'animate-spin' : ''} />
              {isLive ? 'Synced with our Google Business Profile' : 'Showing recent reviews'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
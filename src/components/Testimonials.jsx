import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, PenLine } from 'lucide-react'

// ── Google reviews ─────────────────────────────────────────────────────────
// Live data comes from /api/google-reviews (api/google-reviews.js, a Vercel
// function). It returns Google's current rating + total and the up-to-5
// reviews Google chooses to expose. Those live reviews are shown first and
// merged with the hand-copied list below (duplicates removed by name), so the
// section always shows the full set even though Google's API caps it at 5.
// If the API isn't configured or fails, the section quietly uses the list.
const GOOGLE_PLACE_ID = 'ChIJCe7lvZy7kjkRcN_1qmos-A0'
const REVIEWS_ENDPOINT = '/api/google-reviews'
const INITIAL_VISIBLE = 6

// Real reviews copied from the Google Business Profile (written reviews only).
// Their "x months ago" labels are not rendered — a hard-coded relative date
// goes stale; only live reviews from Google show a date.
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
// Matches the Google Business Profile when this list was copied (5.0★, 47).
// Replaced automatically by live numbers once the API responds.
const FALLBACK_SUMMARY = { rating: 5.0, total: 47 }

const AVATAR_GRADIENTS = [
  'from-blue-500 to-blue-700',
  'from-emerald-500 to-emerald-700',
  'from-violet-500 to-violet-700',
  'from-amber-500 to-amber-700',
  'from-rose-500 to-rose-700',
  'from-cyan-500 to-cyan-700',
]

const avatarGradient = (name) => AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length]
const nameKey = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

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

/** Stars that honour fractional ratings (e.g. 4.7 fills 4 and 70% of the 5th). */
function Stars({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size} className="absolute inset-0">
              <path fill="#E5E7EB" d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 24 24" width={size} height={size}>
                <path fill="#D4AF37" d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
              </svg>
            </span>
          </span>
        )
      })}
    </div>
  )
}

function Avatar({ review }) {
  const [broken, setBroken] = useState(false)
  if (review.profile_photo_url && !broken) {
    return (
      <img
        src={review.profile_photo_url}
        alt=""
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setBroken(true)}
        className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
      />
    )
  }
  return (
    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradient(review.author_name)} flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-sm`}>
      <span className="text-white font-semibold">{review.author_name[0]}</span>
    </div>
  )
}

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false)
  const long = review.text.length > 220
  const name = review.author_url ? (
    <a href={review.author_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
      {review.author_name}
    </a>
  ) : (
    review.author_name
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="break-inside-avoid mb-5 relative bg-white border border-dark-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-primary-200 transition-[box-shadow,transform,border-color] duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar review={review} />
          <div className="min-w-0">
            <p className="font-display font-semibold text-dark-900 truncate">{name}</p>
            <p className="text-xs text-dark-500">
              {review.live && review.relative_time_description ? review.relative_time_description : 'Google review'}
            </p>
          </div>
        </div>
        <GoogleG size={18} />
      </div>

      <div className="mt-4">
        <Stars rating={review.rating} size={15} />
      </div>

      <p className={`mt-3 text-dark-700 leading-relaxed text-[0.95rem] ${long && !expanded ? 'line-clamp-5' : ''}`}>
        {review.text}
      </p>
      {long && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm font-medium text-primary-700 hover:text-primary-800"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      {review.live && (
        <span className="absolute -top-2.5 left-6 px-2 py-0.5 rounded-full bg-primary-600 text-white text-[10px] font-semibold uppercase tracking-wider">
          Latest
        </span>
      )}
    </motion.article>
  )
}

export default function Testimonials() {
  const [live, setLive] = useState(null)
  const [visible, setVisible] = useState(INITIAL_VISIBLE)

  useEffect(() => {
    const controller = new AbortController()
    fetch(REVIEWS_ENDPOINT, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.ok && typeof data.rating === 'number') setLive(data)
      })
      .catch(() => {
        /* Not deployed / not configured — keep the saved reviews. */
      })
    return () => controller.abort()
  }, [])

  const summary = live ? { rating: live.rating, total: live.total ?? FALLBACK_SUMMARY.total } : FALLBACK_SUMMARY

  const reviews = useMemo(() => {
    const fresh = live?.reviews ?? []
    const seen = new Set(fresh.map((r) => nameKey(r.author_name)))
    return [...fresh, ...FALLBACK_REVIEWS.filter((r) => !seen.has(nameKey(r.author_name)))]
  }, [live])

  const readAllHref = live?.reviewsUrl || `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`
  const writeReviewHref = live?.writeReviewUrl || `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  const shown = reviews.slice(0, visible)

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" aria-labelledby="reviews-title">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200/70 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-primary-200/25 rounded-full blur-[130px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 mb-4">
            <GoogleG size={14} /> Google Reviews
          </span>
          <h2 id="reviews-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4">
            What Our Clients Say on <span className="gradient-text">Google</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Real reviews from our Google Business Profile, from clients across Chapra and Bihar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Summary */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 p-8 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                  <GoogleG size={24} />
                </span>
                <div>
                  <p className="font-display font-semibold">Saran Tax Solution</p>
                  <p className="text-xs text-primary-200">Nehru Chowk, Chapra</p>
                </div>
              </div>

              <div className="mt-8 flex items-end gap-3">
                <span className="font-display font-bold text-7xl leading-none">{summary.rating.toFixed(1)}</span>
                <div className="pb-1.5">
                  <Stars rating={summary.rating} size={18} />
                  <p className="mt-1 text-sm text-primary-100">
                    {summary.total.toLocaleString('en-IN')} reviews
                  </p>
                </div>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-primary-200">
                <span className={`w-2 h-2 rounded-full ${live ? 'bg-emerald-400 animate-pulse' : 'bg-primary-300'}`} />
                {live ? 'Live from Google' : 'From our Google profile'}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={writeReviewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary-800 font-semibold px-5 py-3 hover:bg-primary-50 transition-colors"
                >
                  <PenLine size={16} /> Write a review
                </a>
                <a
                  href={readAllHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  Read all on Google <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Review wall */}
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-5 pt-3">
              {shown.map((review, i) => (
                <ReviewCard key={nameKey(review.author_name)} review={review} index={i} />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {visible < reviews.length ? (
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + 6)}
                  className="inline-flex items-center gap-2 rounded-xl border border-dark-200 bg-white px-5 py-3 text-sm font-medium text-dark-800 hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  Show more reviews <ChevronDown size={16} />
                  <span className="text-dark-400">({reviews.length - visible} more)</span>
                </button>
              ) : (
                <a
                  href={readAllHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-dark-200 bg-white px-5 py-3 text-sm font-medium text-dark-800 hover:border-primary-300 transition-colors"
                >
                  See every review on Google <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

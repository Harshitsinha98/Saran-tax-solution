// /api/google-reviews.js
//
// Serverless endpoint that fetches your business's latest Google reviews
// and serves them to the Testimonials component on the frontend.
//
// PLATFORM: written for Vercel. Drop this file at `api/google-reviews.js`
// in your project root and it just works. For Netlify or a plain Node /
// Express server, see "Adapting this for other platforms" in README.md —
// the Google-calling logic below is identical either way, only the
// function signature changes.
//
// REQUIRED ENVIRONMENT VARIABLES (set in your hosting dashboard, never in
// committed code):
//   GOOGLE_PLACES_API_KEY   API key from Google Cloud Console with the
//                           "Places API" enabled and billing turned on
//   GOOGLE_PLACE_ID         Your business's Place ID (see README.md)

// Simple in-memory cache so we don't call Google on every single page load.
// On serverless platforms this resets whenever the function cold-starts,
// which in practice still keeps you comfortably within Google's free quota.
let cache = { data: null, fetchedAt: 0 }
const CACHE_TTL_MS = 60 * 60 * 1000 // re-fetch from Google at most once an hour

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const now = Date.now()
  if (cache.data && now - cache.fetchedAt < CACHE_TTL_MS) {
    return res.status(200).json(cache.data)
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  // Not configured yet — return the last good cache (or an empty shape) so
  // the frontend's fetch doesn't error, it just keeps showing its own
  // local fallback reviews instead.
  if (!apiKey || !placeId) {
    return res.status(200).json(cache.data || { reviews: [], rating: null, total: null })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`
    const response = await fetch(url)
    const json = await response.json()

    if (json.status !== 'OK') {
      throw new Error(json.error_message || json.status)
    }

    const result = {
      rating: json.result.rating ?? null,
      total: json.result.user_ratings_total ?? null,
      reviews: (json.result.reviews || []).map((r) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
        time: r.time,
      })),
    }

    cache = { data: result, fetchedAt: now }
    return res.status(200).json(result)
  } catch (err) {
    console.error('Google Reviews fetch failed:', err.message)
    // Serve the last cached copy rather than breaking the section.
    return res.status(200).json(cache.data || { reviews: [], rating: null, total: null })
  }
}

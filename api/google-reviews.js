// Vercel Serverless Function → GET /api/google-reviews
//
// Fetches the live rating, total review count and the (up to 5) reviews Google
// returns for Saran Tax Solution, using the Places API (New).
//
// Env vars (Vercel → Project → Settings → Environment Variables):
//   GOOGLE_PLACES_API_KEY   required. A SERVER key: restrict it to "Places API
//                           (New)" and leave application restriction as "None".
//                           A key restricted to HTTP referrers is rejected by
//                           Google when called from a server.
//   GOOGLE_PLACE_ID         optional, defaults to the clinic's confirmed ID.
//
// The key never reaches the browser. The response is cached on Vercel's CDN for
// an hour, so Google is called roughly once an hour no matter the traffic.

const DEFAULT_PLACE_ID = 'ChIJCe7lvZy7kjkRcN_1qmos-A0'
const FIELDS = 'rating,userRatingCount,reviews,googleMapsUri,googleMapsLinks'

function empty(reason) {
  return { ok: false, reason, rating: null, total: null, reviews: [] }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json(empty('method_not_allowed'))
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID

  if (!apiKey) {
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json(empty('not_configured'))
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': FIELDS },
        signal: AbortSignal.timeout(8000),
      },
    )
    const data = await response.json()

    if (!response.ok) {
      // Logged for the Vercel function logs; the browser only sees a reason code.
      console.error('[google-reviews]', response.status, data?.error?.status, data?.error?.message)
      res.setHeader('Cache-Control', 's-maxage=300')
      return res.status(200).json(empty(data?.error?.status || 'google_error'))
    }

    const reviews = (data.reviews || [])
      .map((r) => ({
        author_name: r.authorAttribution?.displayName || 'Google user',
        author_url: r.authorAttribution?.uri || null,
        profile_photo_url: r.authorAttribution?.photoUri || null,
        rating: r.rating ?? 5,
        text: (r.text?.text || r.originalText?.text || '').trim(),
        relative_time_description: r.relativePublishTimeDescription || '',
        publish_time: r.publishTime || null,
        live: true,
      }))
      .filter((r) => r.text)

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({
      ok: true,
      rating: data.rating ?? null,
      total: data.userRatingCount ?? null,
      reviews,
      reviewsUrl: data.googleMapsLinks?.reviewsUri || data.googleMapsUri || null,
      writeReviewUrl: data.googleMapsLinks?.writeAReviewUri || null,
    })
  } catch (error) {
    console.error('[google-reviews] request failed:', error?.message)
    res.setHeader('Cache-Control', 's-maxage=60')
    return res.status(200).json(empty('network_error'))
  }
}

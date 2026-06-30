// File path in your project: app/api/google-reviews/route.js
//
// Server-side route — fetches live rating + reviews from Google Places API.
// The API key never reaches the browser because this code only runs on the server.

import { NextResponse } from 'next/server';

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// Re-fetch from Google at most once an hour — avoids burning API quota
// on every page load while keeping the data fresh.
export const revalidate = 3600;

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    // Env vars not set yet — return empty so the frontend quietly keeps
    // showing its own fallback reviews instead of breaking.
    return NextResponse.json({ reviews: [], rating: null, total: null });
  }

  try {
    const fields = 'reviews,rating,user_ratings_total';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&reviews_sort=newest&key=${API_KEY}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json({ reviews: [], rating: null, total: null });
    }

    const result = data.result;

    // Shaped to match exactly what Testimonials.jsx expects — author_name,
    // rating, relative_time_description, text, profile_photo_url.
    const reviews = (result.reviews || []).map((r) => ({
      author_name: r.author_name,
      rating: r.rating,
      relative_time_description: r.relative_time_description,
      text: r.text,
      profile_photo_url: r.profile_photo_url,
    }));

    return NextResponse.json({
      reviews,
      rating: result.rating ?? null,
      total: result.user_ratings_total ?? null,
    });
  } catch (err) {
    // Network/API failure — fail quiet, let the frontend fallback handle it.
    return NextResponse.json({ reviews: [], rating: null, total: null });
  }
}

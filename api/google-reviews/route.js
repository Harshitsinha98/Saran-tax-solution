// File path in your project: app/api/google-reviews/route.js
//
// Server-side route — fetches just the live rating + review count from
// Google Places API. The full review text is hand-curated directly in
// Testimonials.jsx (Google's API caps reviews at 5 regardless of how many
// the business actually has, so this route only pulls the two numbers that
// actually change over time: rating and total review count).
//
// The API key never reaches the browser because this code only runs on the server.

import { NextResponse } from 'next/server';

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// Re-fetch from Google at most once an hour — avoids burning API quota
// on every page load while keeping the numbers fresh.
export const revalidate = 3600;

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    // Env vars not set yet — return nulls so the frontend quietly keeps
    // showing its own static rating/total instead of breaking.
    return NextResponse.json({ rating: null, total: null });
  }

  try {
    const fields = 'rating,user_ratings_total';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${API_KEY}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json({ rating: null, total: null });
    }

    return NextResponse.json({
      rating: data.result.rating ?? null,
      total: data.result.user_ratings_total ?? null,
    });
  } catch (err) {
    // Network/API failure — fail quiet, let the frontend fallback handle it.
    return NextResponse.json({ rating: null, total: null });
  }
}
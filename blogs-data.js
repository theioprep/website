/* ==========================================================================
   Shared blog post data used by index.html (latest 3) and blogs.html (all).
   PLACEHOLDER CONTENT — replace title/excerpt/date/tag with real posts.
   Dates are ISO (YYYY-MM-DD) so sorting works correctly.
   ========================================================================== */

const BLOG_POSTS = [
  {
    id: "post-1",
    title: "[Placeholder title] Five things examiners actually reward",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-07-20",
    tag: "IB English",
    // Individual post pages are named by date (YYYYMMDD.html). Only this
    // one exists so far (see 20260720.html) — add a `url` field here once
    // each post below gets its own page, or drop it to fall back to the
    // in-page anchor on blogs.html.
    url: "20260720.html"
  },
  {
    id: "post-2",
    title: "[Placeholder title] How to structure a Paper 1 response",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-07-12",
    tag: "IGCSE English"
  },
  {
    id: "post-3",
    title: "[Placeholder title] What I wish I'd known before exam season",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-07-02",
    tag: "Study tips"
  },
  {
    id: "post-4",
    title: "[Placeholder title] Building a revision timetable that works",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-06-21",
    tag: "Study tips"
  },
  {
    id: "post-5",
    title: "[Placeholder title] Common mistakes in commentary writing",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-06-08",
    tag: "IB English"
  },
  {
    id: "post-6",
    title: "[Placeholder title] Reading list for the summer",
    excerpt: "[Placeholder excerpt — a short 1–2 sentence summary of the post goes here.]",
    date: "2026-05-27",
    tag: "Reading list"
  }
];

/* Returns posts sorted newest → oldest */
function getSortedPosts() {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js App Router portfolio site. PostHog is initialized via `instrumentation-client.ts` (Next.js 15.3+ pattern — no provider needed), with a reverse proxy configured in `next.config.ts` to route telemetry through `/ingest` for ad-blocker resilience. Environment variables are stored in `.env.local`. Eight events are tracked across client components covering social engagement, blog reading behaviour, resume downloads, and app link clicks.

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | Visitor clicked a social link (github, linkedin, email, resume) from the home page socials section | `components/home/socials.tsx` |
| `resume_downloaded` | Visitor clicked the resume download link in the contact footer | `components/home/contact-link.tsx` |
| `contact_link_clicked` | Visitor clicked a contact link (email, phone, linkedin) in the contact footer | `components/home/contact-link.tsx` |
| `blog_post_clicked` | Visitor clicked a blog post card on the blog listing page | `components/blog/BlogPostLink.tsx` |
| `blog_post_viewed` | Visitor loaded a blog post detail page — top of the reading funnel | `components/blog/BlogPostViewTracker.tsx` |
| `app_link_clicked` | Visitor clicked a published app logo/link in the apps grid | `components/home/app-link.tsx` |
| `portfolio_link_clicked` | Visitor clicked the GitHub portfolio link | `components/home/portfolio-link.tsx` |
| `theme_toggled` | Visitor toggled between light and dark mode | `components/theme/theme-toggle.tsx` |

## Files created or modified

**Created:**
- `instrumentation-client.ts` — PostHog client-side init (Next.js 15.3+ pattern)
- `components/home/contact-link.tsx` — Client wrapper for contact footer links
- `components/home/app-link.tsx` — Client wrapper for published app links
- `components/blog/BlogPostLink.tsx` — Client wrapper for blog post card links
- `components/blog/BlogPostViewTracker.tsx` — Client component that fires `blog_post_viewed` on mount

**Modified:**
- `next.config.ts` — Added PostHog reverse proxy rewrites and `skipTrailingSlashRedirect`
- `components/home/socials.tsx` — Added `'use client'`, `social_link_clicked` capture
- `components/home/portfolio-link.tsx` — Added `'use client'`, `portfolio_link_clicked` capture
- `components/home/contact.tsx` — Swapped `<a>` tags for `<ContactLink>` client component
- `components/home/apps-grid.tsx` — Swapped app `<a>` tags for `<AppLink>` client component
- `components/blog/FeaturedPost.tsx` — Swapped `<Link>` for `<BlogPostLink>` client component
- `app/blog/page.tsx` — Swapped post `<Link>` for `<BlogPostLink>` client component
- `app/blog/[slug]/page.tsx` — Added `<BlogPostViewTracker>` component
- `components/theme/theme-toggle.tsx` — Added `theme_toggled` capture on button click

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1568672)
- [Social Link Clicks by Type](/insights/TvWyKRHh) — Which social links visitors click most, broken down by type
- [Blog Post Clicks Over Time](/insights/iBKpP0Ae) — Daily trend of blog post card clicks
- [Resume Downloads](/insights/mH5fLd0Z) — Total resume downloads (last 30 days)
- [Blog Reading Funnel](/insights/M5ROQioL) — Conversion from blog post clicked → blog post viewed
- [App Link Clicks](/insights/etnGnV5Q) — Which published apps visitors click through to, broken down by app

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

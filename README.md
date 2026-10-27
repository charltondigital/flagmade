# Flagmade

A curated local arts, culture & commerce calendar for Flagstaff residents. Built with Astro and ready for Cloudflare Pages.

## Run locally

```sh
npm install
npm run dev
npm run build
```

Cloudflare Pages settings: Framework preset **Astro**, build command **npm run build**, output directory **dist**. Point the custom domain to `flagmade.org` after connecting the repository.

## Publishing an event

Add an object to `src/data/events.json`. Only records with `status: "published"` and required fields display. Event timestamps **must include an explicit Arizona offset** (usually `-07:00`) to avoid time-zone mistakes.

```json
[
  {
    "id": "unique-organization-event-2026-11-12",
    "status": "published",
    "title": "Example event — replace with a verified real event",
    "organization": "Example Organization",
    "category": "Science & Discovery",
    "start": "2026-11-12T19:00:00-07:00",
    "end": "2026-11-12T20:30:00-07:00",
    "allDay": false,
    "venue": "Example Hall",
    "city": "Flagstaff",
    "description": "Short factual editorial description.",
    "price": "Free",
    "tags": ["astronomy", "lecture"],
    "url": "https://example.org/events/example"
  }
]
```

**This JSON is only an example; the actual calendar starts empty.** Verify dates and organizer event URLs before publishing. Accepted categories: Arts & Performance; Science & Discovery; History & Heritage; Farms & Food; Makers & Commerce. Use `status: "draft"` for records pending review.

## Calendar behavior

- Search event title, organization, venue, description, category, tags.
- Filter by category, organizer, and month. Filters can combine and persist as shareable URL parameters.
- Sort by soonest/latest date, event title, or organization.
- Past events disappear automatically (based on Arizona time); multi-day entries remain visible until their end date.
- Accessible, responsive cards link to the **original organizer's event page**.
- No invented events or unapproved third-party aggregation; editorially approved events only.

## Editorial policy

Flagmade serves Flagstaff residents, not general tourism. Focus on arts, science, museums, history, agriculture, crafts, and distinctive independent commerce. Exclude routine student/youth performances, nightlife, pseudoscience, generic promotions, and events without broader community appeal. Listing is not pay-to-play.

## Next stages

Populate verified upcoming events; introduce a reviewed ingestion workflow from source calendars; add calendar subscriptions (iCal); optionally add recurring exhibitions as a separate experience from date-specific events.

## Event ingestion and permanent expiration

Published event records live in `src/data/events/<unique-id>.json`, one occurrence per file. The home page builds its calendar from all JSON records in that folder. Never publish an event without a verified organizer source and date. The `src/data/events.json` legacy array is no longer used.

A GitHub Actions cron job runs daily at 08:30 Arizona time (15:30 UTC) and runs `node scripts/prune-events.mjs`. The script **deletes** any JSON event whose final date is strictly earlier than the current Arizona calendar date. Its commit then rebuilds the published Cloudflare Pages site, assuming GitHub deployment is connected. Run manually using GitHub Actions → Delete expired event JSON → Run workflow. Deletion is permanent on the current branch, although Git history retains past commits; Git history is not purged.

For performance, event data is bundled at build time, with no runtime event-feed fetches. Add new events in reviewable batches, deduplicated by `id` and organizer URL. For long-running productions with multiple showtimes, create each confirmed performance separately rather than treating the entire run as one uninterrupted show. The calendar does not currently perform automated source scraping or review; source ingestion is a separate next-stage workflow.

## Manual curation and pricing

For now, discover events manually from `src/data/event-sources.json`, then add only verified and relevant public events as one JSON record per occurrence. Do not automatically publish scraped event candidates. Check organizer, start/end time, venue, and source before publication. For `price`, use an exact published ticket price (e.g. `$30 general / $25 senior`), `Free` or `Free admission` only if confirmed, or `Price not listed` when the organizer has not stated an amount. Avoid inventing prices or assuming a museum event is included in admission. The calendar renders this price next to the venue and time. Source registry now includes theater, libraries, educational sites, galleries, artisan markets, and local food markets.

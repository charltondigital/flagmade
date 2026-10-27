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

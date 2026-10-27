# Flagmade launch checklist — REQUIRED BEFORE GOING PUBLIC

**Current state: STAGING / NOT INDEXABLE.** Do not mark launch complete until every item is checked.

- [ ] Confirm the intended public hostname / subdomain and Cloudflare Pages domain redirects.
- [ ] Remove the “Under construction” banner from every Astro page (search for `construction-banner`).
- [ ] Remove the `noindex, nofollow, noarchive` robots meta from every Astro page.
- [ ] Remove the staging `X-Robots-Tag` rule in `public/_headers` (or replace with normal production headers).
- [ ] Confirm any Cloudflare dashboard-level robots / headers / Access rules are appropriate for launch.
- [ ] Update canonical URLs and sitemap references from `flagmade.pages.dev` to the public hostname.
- [ ] Validate current businesses, map pins and events; confirm Pagefind and Leaflet in browser.
- [ ] Verify live homepage, directory, detail page and event page return indexable HTML and do NOT send an X-Robots-Tag noindex response.
- [ ] Submit production sitemap in Google Search Console, then request indexing.

**Never remove only the banner:** both meta robots and response headers must be removed to enable indexing. Search the repository for `noindex` and `construction-banner` before release.

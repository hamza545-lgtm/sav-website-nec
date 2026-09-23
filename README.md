# Savnec Website — Deployment Guide

An 11-page static site: Home, Clients, Experts, Industries, Compliance, About/Contact
(with FAQs), Insights (2 published articles), Privacy & Cookie Policy, and Terms &
Conditions. No build tools, no frameworks — plain HTML/CSS/JS. Free to host and deploy.

---

## 1. Before you deploy — things still worth checking

- **Forms**: Your real Web3Forms access keys are already wired into `clients.html`,
  `experts.html`, and `about.html`. If you ever regenerate a key or add a new form,
  just paste the new key into the hidden `access_key` input.
- **Phone number**: In `about.html`, replace `+1 (XXX) XXX-XXXX` with your real
  OpenPhone/Grasshopper US number.
- **Registered address**: In `about.html`, confirm the Delaware address matches your
  actual registered agent / business address.
- **Logo**: Currently a text wordmark ("Sav" + "nec" in Montserrat, navy/emerald)
  styled in `css/style.css` under `.logo`. Once your Canva logo is ready, export it as
  a transparent PNG or SVG, drop it in `images/`, and swap the
  `<a class="logo">Sav<span>nec</span></a>` lines in every page for
  `<img src="images/logo.svg" alt="Savnec">`. Also update `images/favicon.svg` with
  your real mark when ready.
- **Social links**: LinkedIn and Instagram links in every footer currently point to
  `linkedin.com/company/savnec` and `instagram.com/savnec` — update these once your
  real profiles exist, or remove the ones you don't plan to use.
- **Testimonial**: The quote on `clients.html` is a labeled placeholder — replace once
  you have a real client quote, or remove the block.
- **Legal pages**: `privacy-policy.html` and `terms.html` are a solid, professional
  starting point but are not a substitute for review by a lawyer, especially before
  handling EU/UK client or expert data at scale (GDPR) or California residents (CCPA).

## 2. Deploy — GitHub + Vercel (free, with your own domain)

1. Create a free account at https://github.com if you don't have one.
2. Create a new repository (e.g. `savnec-website`), keep it Public or Private, no need
   to initialize with a README (you already have one).
3. On the repository page, click "Add file" → "Upload files," and drag in every file
   and folder from this project (`index.html`, `clients.html`, `css/`, `js/`, etc.),
   keeping the same folder structure. Commit the upload.
4. Go to https://vercel.com and sign up using your GitHub account.
5. Click "Add New" → "Project," select your `savnec-website` repository, and click
   Deploy. Vercel will detect it's a static site automatically — no configuration
   needed. You'll get a live `.vercel.app` URL within a minute.
6. In the Vercel project, go to Settings → Domains, and add `savnec.com` (and
   `www.savnec.com`).
7. Vercel will show you DNS records (usually an A record and/or CNAME) to add at
   wherever you registered the domain (GoDaddy, Namecheap, etc.). Add those records
   in your domain registrar's DNS settings.
8. DNS changes can take anywhere from a few minutes to a few hours to propagate.
   Once done, `savnec.com` will point directly to this site — free, ongoing.

## 3. Making updates later

Any time you want to change text, prices, or add content:

1. Edit the relevant `.html` file directly (open in any text editor — VS Code is
   recommended and free).
2. Upload the changed file back to the same GitHub repository (same "Add file" →
   "Upload files" flow, or drag the updated file onto the existing one — GitHub
   will detect it as a change).
3. Vercel automatically redeploys within about a minute of any change to the
   repository. No separate "publish" step needed.

## 4. Adding a new blog post

Duplicate `insights-what-is-an-expert-network.html` or `insights-industry-trends.html`
as a starting template (same header/footer, same `.article-body` styling), write your
new article inside the `.article-body` div, save it as a new file (e.g.
`insights-your-topic.html`), then add a new `.blog-card` linking to it inside the
`.blog-grid` on `insights.html`. No CMS needed for a handful of posts.

## File structure

```
savnec-website/
├── index.html                              Home
├── clients.html                             For Clients (with request form)
├── experts.html                              For Experts (with application form)
├── industries.html                          Industries we cover
├── compliance.html                          Compliance & Data Privacy
├── about.html                                About, FAQs & Contact (with general inquiry form)
├── insights.html                             Insights (blog index)
├── insights-what-is-an-expert-network.html   Article 1
├── insights-industry-trends.html            Article 2
├── privacy-policy.html                       Privacy & Cookie Policy
├── terms.html                                Terms & Conditions
├── css/style.css                            All styling — brand colors as CSS variables at the top
├── js/main.js                                Mobile nav toggle + scroll-reveal animation
└── images/                                   Drop your logo/favicon files here when ready
```

## Brand tokens (already wired into css/style.css)

```
--navy:    #0A192F
--white:   #FFFFFF
--slate:   #8892A0
--emerald: #0F6E4C
```

## Design system notes

- **Typography**: Inter (body), Montserrat (logo wordmark only). Headings and lede
  paragraphs use a deliberate size scale — `.hero-content h1` is the largest statement
  on the site, `.page-intro h1` is a step down for subpages, `.lede` is for primary
  intro copy, `.lede-sm` for secondary/supporting lines.
- **Motion**: Buttons, nav links, and cards have hover states (lift, shadow, color).
  Content fades up into view on scroll via `.reveal-el` (handled automatically in
  `js/main.js` — no per-page setup needed for new sections built from the same
  classes: `.section-head`, `.feature-row`, `.audience-card`, `.info-card`, etc.).
  The homepage stats ticker scrolls continuously and pauses on hover.
- All motion respects `prefers-reduced-motion`.

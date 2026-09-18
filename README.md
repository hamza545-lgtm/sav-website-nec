# Savnec Website — Deployment Guide

A 6-page static site: Home, Clients, Experts, Compliance, Insights (placeholder), About/Contact.
No build tools, no frameworks — plain HTML/CSS/JS. Free to host and deploy.

---

## 1. Before you deploy — things to replace

Search for these and swap in your real details:

- **Forms**: In `clients.html` and `experts.html`, replace `YOUR_ACCESS_KEY` in the
  hidden `access_key` input with your real Web3Forms access key. Sign up free at
  https://web3forms.com (250 submissions/month free, no card required), create an
  access key, paste it in both files. Until you do this, the forms will not send
  anywhere.
- **Phone number**: In `about.html`, replace `+1 (XXX) XXX-XXXX` with your real
  OpenPhone/Grasshopper US number.
- **Registered address**: In `about.html`, replace the placeholder Delaware address
  with your actual registered agent / business address.
- **Logo**: Currently a text wordmark ("Sav" + "nec" in emerald) styled in `css/style.css`
  under `.logo`. If you finish a logo image in Canva, export it as a transparent PNG or
  SVG, drop it in the `images/` folder, and swap the `<a class="logo">Sav<span>nec</span></a>`
  lines in every page for `<img src="images/logo.svg" alt="Savnec">`.
- **Testimonial**: The quote on `clients.html` is a labeled placeholder — replace once
  you have a real client quote, or remove the block.

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

## 4. Adding a real blog later

`insights.html` is currently a placeholder page so the URL and nav link never have
to change. When you're ready for real articles, the simplest low-effort path is to
duplicate the page (e.g. `insights-post-1.html`) using the same header/footer, drop
your article content into a `<section>` in the body, and link to it from
`insights.html`. No CMS needed for a handful of posts; if you outgrow that later,
migrating a handful of static articles into a proper blog platform is a small job.

## File structure

```
savnec-website/
├── index.html          Home
├── clients.html         For Clients (with request form)
├── experts.html         For Experts (with application form)
├── compliance.html      Compliance & Data Security
├── about.html            About & Contact
├── insights.html         Insights (placeholder)
├── css/style.css        All styling — brand colors as CSS variables at the top
├── js/main.js            Mobile nav toggle
└── images/               Drop your logo file here when ready
```

## Brand tokens (already wired into css/style.css)

```
--navy:    #0A192F
--white:   #FFFFFF
--slate:   #8892A0
--emerald: #0F6E4C
```

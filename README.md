# Daniel Lavdari Portfolio

Recruiter-facing portfolio built with React, Vite, and Tailwind CSS and deployed to GitHub Pages.

## Local development

1. Install dependencies with `npm ci`.
2. Add the EmailJS values to a local `.env` using `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
3. Run `npm run dev`.

The EmailJS public key is a browser-side identifier, not a private secret. Configure domain and template restrictions, bot protection, and usage limits in EmailJS.

## Checks

- `npm run build`
- `npm run lint`
- `npm audit`

## Deployment

`npm run deploy` builds the site and publishes `dist` to the `gh-pages` branch. Confirm **Enforce HTTPS** is enabled in GitHub Pages settings.

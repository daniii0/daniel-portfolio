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

Pushes to `main` run `.github/workflows/deploy-pages.yml`. The workflow installs locked dependencies, runs lint and the dependency audit, builds the Vite application, uploads `dist`, and deploys the artifact through GitHub Pages.

The Vite base path is `/daniel-portfolio/`, matching this repository's GitHub Pages project-site URL. The legacy `gh-pages` branch is no longer used by the deployment workflow.

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Also confirm **Enforce HTTPS** is enabled.

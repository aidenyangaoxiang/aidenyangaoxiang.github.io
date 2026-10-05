# Aoxiang (Aiden) Yang — academic website

Next.js App Router, TypeScript, and Tailwind CSS. An English academic website with Home, Research, Publications, Experience, and CV pages. The build produces a fully static `out/` directory; no database, API key, or server is required in production.

Public website: [aidenyangaoxiang.github.io](https://aidenyangaoxiang.github.io/).
Source repository: [aidenyangaoxiang/aidenyangaoxiang.github.io](https://github.com/aidenyangaoxiang/aidenyangaoxiang.github.io).
GitHub Pages is enabled with the included Actions workflow. Push changes to `main` to build and deploy updates automatically. Review deployment progress in the repository's Actions tab.

## Run locally

Use Node.js 22 or later (Node 24 is used by the included deployment workflow).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To validate and build:

```sh
npm run lint
npm run build
npm run typecheck
```

The CV buttons open a PDF in a new tab. The footer also links to the HTML CV page.

## Replace the placeholders

| Item | What to change |
| --- | --- |
| Portrait | Add `public/profile.jpg`. The default is an intentional initials placeholder. Change `profileImage` and `profileAlt` in `data/site.ts` for another filename. |
| CV | Replace `public/Aoxiang_Yang_CV.pdf` with your real PDF and set `cvIsPlaceholder: false` in `data/site.ts`. The supplied PDF explicitly identifies itself as a placeholder. |
| Project figures | Add `public/projects/pave.png`, `clip-lora.png`, `memnav.png`, and `sign-language.png`. Each is optional; absent figures use conceptual diagrams without invented experimental results. Edit `image` and `imageAlt` in `data/research.ts` as needed. |
| Email / social profiles | Fill `email`, `githubUrl`, `scholarUrl`, and `linkedinUrl` in `data/site.ts`. Empty values are deliberate placeholders and render muted labels, never broken links or empty buttons. |
| Research | Edit `data/research.ts`: titles, descriptions, themes, verified authors, roles, highlights, status, and optional public links. |
| Manuscripts / publications | Edit `data/publications.ts`. Add verified year, venue, authors, public links, and BibTeX only when available. |
| Experience / education | Edit `data/experience.ts`. Additional experiences are supported. The optional minor is empty; GPA is omitted. |
| News | Edit `data/news.ts`. Dates are strings so a year-only entry does not acquire an invented month. |
| Favicon | Replace `public/favicon.svg` with your preferred icon and update `app/layout.tsx` if its filename changes. |

Public assets are detected at build time. Restart the development server if a newly added image is not picked up, and rebuild/redeploy after updating any content or asset.

PAVE is explicitly **under review at ICLR 2027**. Both its research and publication records have `doubleBlind: true`: authors, manuscript/code/project URLs, and BibTeX remain suppressed even if accidentally populated. Do not add submission identifiers or anonymous assets to `public/`, data files, or this repository. After review restrictions end, deliberately update both records and provide verified public information. The other three works are **Research Project** records, never inferred publications. Published, Preprint, Under Review, and Research Project have distinct status styles.

## Deploy to Vercel

1. Put the contents of this `academic-website` directory in a Git repository and import it in Vercel. If this remains inside another repository, set Vercel's **Root Directory** to `academic-website`.
2. Select the **Next.js** framework preset; use the default install command and `npm run build`. Keep the automatically detected output settings. This project has `output: "export"` and exports to `out/`.
3. Leave `NEXT_PUBLIC_BASE_PATH` empty. Set `NEXT_PUBLIC_SITE_URL` to your real production origin (for example, your assigned Vercel origin or custom domain). Do not paste a sample URL into the site data as if it were your own.
4. Deploy. If you did not know the origin before the first deployment, set it afterward and redeploy to regenerate the canonical URLs and sitemap.

Official guidance: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) and [build configuration](https://vercel.com/docs/builds/configure-a-build).

## Deploy to GitHub Pages

1. Put the contents of this directory at the root of a GitHub repository, including `.github/workflows/pages.yml` and `package-lock.json`. The workflow assumes this website is the repository root.
2. Use `main` as the publishing branch, or change `branches: [main]` in the workflow to match your default branch.
3. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main`, or run the workflow manually in the Actions tab. It installs dependencies, runs lint, builds the static site, checks types, and publishes `out/`.
5. The workflow reads the real base path and origin from `actions/configure-pages`; internal page links, project images, portrait, favicon, and CV work for both a root user site and a `/repository-name` project site. Configure a custom domain in GitHub's Pages settings if desired; the same workflow reads its configured origin.

To verify a project-site build locally (replace `/your-repository-name` with your own path):

```sh
NEXT_PUBLIC_BASE_PATH=/your-repository-name npm run build
```

Then serve `out/` mounted at that prefix, rather than opening its HTML with `file://`. For the next root deployment, rebuild without `NEXT_PUBLIC_BASE_PATH`.

Official guidance: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), and [Next.js basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath).

## Structure

```text
app/                 Routes, metadata, global styles
components/          Navbar, ResearchCard, PublicationItem, timeline, social links, footer
data/                Site configuration and structured academic content
lib/                 Build-time asset checks and safe URL helpers
public/              CV, portrait, favicon, project figures
.github/workflows/   GitHub Pages deployment
.openai/hosting.json  Private Sites deployment identity (not needed by Vercel/Pages)
```

Semantic landmarks, a skip link, visible keyboard focus, mobile navigation with Escape handling, reduced-motion support, and responsive layouts are included. No analytics or remote font/image requests are added.

## Validation notes

Lint, TypeScript checking, and production export have passed. Browser checks cover all five pages at 1440, 768, 390, and 320 pixels; 200% text enlargement; mobile navigation and Escape; internal anchors; PDF links; omitted optional project links; and the double-blind review notice. The installed production dependencies have no npm audit findings. A full development dependency audit reports the unpatched `braces` advisory through Next.js's ESLint tooling; it is not included in the exported website. The current registry provides no patched `braces` release, so the project does not force a framework downgrade to silence that finding.

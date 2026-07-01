# Seif Eldeen Hassan — Portfolio

A premium, dark-themed personal portfolio for an entry-level AI & Machine
Learning Engineer. Built with Vite, React, TypeScript, Tailwind CSS, and
Framer Motion. No backend, no paid APIs — fully static and easy to deploy.

## Tech stack

- **Vite** — build tool & dev server
- **React 19 + TypeScript** — UI and type safety
- **Tailwind CSS v4** — styling, via `@tailwindcss/vite`
- **Framer Motion** — scroll-reveal and hover animations
- **Lucide React** — icon set (GitHub/LinkedIn marks are custom inline SVGs,
  see *Notes* below)

## Project structure

```
src/
  components/        UI components, one per section + shared pieces
    NeuralBackground.tsx   ambient canvas (the page's signature visual)
    SectionHeading.tsx     shared eyebrow + title used by every section
    icons.tsx               custom GitHub / LinkedIn marks
    Navbar.tsx, Hero.tsx, About.tsx, Projects.tsx, ProjectCard.tsx,
    Skills.tsx, Certifications.tsx, Education.tsx,
    PracticalExperience.tsx, Publications.tsx, Contact.tsx, Footer.tsx
  data/               Content lives here — edit these files, not the components
    site.ts            name, role, bio, links, CTA copy
    projects.ts         the 6 featured projects
    skills.ts            grouped skill lists
    certifications.ts    certification cards
    education.ts         education timeline + publications
  types/index.ts       shared TypeScript interfaces for the data above
  index.css            design tokens (`@theme`) + small utility classes
  App.tsx               assembles all sections in order
public/
  cv/                  drop the real CV PDF here
  projects/             drop project screenshots here
```

The site is data-driven: to add, remove, or reorder a project, certification,
skill, or education entry, edit the corresponding file in `src/data/` — no
component code changes required.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Customizing content

1. **Personal info & links** — `src/data/site.ts`
   - `email`, `github`, `linkedin` — replace the placeholder URLs.
   - `cvUrl` — points to `/cv/Seif-Eldeen-Hassan-CV.pdf`. Drop the real PDF
     into `public/cv/` with that filename, or update the path.
   - `about`, `practicalExperience`, `contactCta` — bio copy.

2. **Projects** — `src/data/projects.ts`
   - Each project has `githubUrl` and an optional `liveUrl`. Leave `liveUrl`
     empty (`""`) to show a "Demo coming soon" badge instead of a button.
   - Project cards currently show a placeholder "Add screenshot" panel.
     To use a real image, drop it in `public/projects/`, add an `image`
     field to the `Project` type in `src/types/index.ts`, and render it
     conditionally at the top of `ProjectCard.tsx`.

3. **Skills** — `src/data/skills.ts` — four grouped lists; add/remove
   entries freely, or add a new group object (also map an icon for it in
   `Skills.tsx`'s `groupIcons`).

4. **Certifications** — `src/data/certifications.ts` — add the real `date`
   and `credentialUrl` (verification link) for each badge once available.

5. **Education & publications** — `src/data/education.ts`.

6. **Colors, type, and the signature background** — `src/index.css`
   (`@theme` block) controls the entire palette and font stack in one
   place. `NeuralBackground.tsx` renders the ambient particle-network
   canvas; tweak `density`, `linkDistance`, or colors there.

## Notes

- `lucide-react`'s newer versions no longer ship brand marks (GitHub,
  LinkedIn, etc.) for trademark reasons. Two lightweight custom SVG icons
  live in `src/components/icons.tsx` for that reason — feel free to swap in
  your own brand assets there.
- All "Add screenshot" / "Add link" / placeholder strings in the UI are
  intentional signposts for content that still needs to be filled in —
  search the codebase for `TODO` and `placeholder` to find every spot.
- Animations respect `prefers-reduced-motion`.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying

The output is a plain static site (`dist/`), so any static host works:

- **Vercel / Netlify** — connect the repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages** — build, then push the contents of `dist/` to a
  `gh-pages` branch (or use an action like `peaceiris/actions-gh-pages`).
- **Any static host** (Cloudflare Pages, S3 + CloudFront, etc.) — upload
  the contents of `dist/` after running the build.

No environment variables or backend services are required.

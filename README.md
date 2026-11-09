# Cerita Romiz

Bilingual personal portfolio for Ahmad Romiz, Backend, Automation & Data Engineer. Published on GitHub Pages at https://ahmadromiz1.github.io/cerita-romiz/.

## Pages

- `index.html` / `index-id.html`: Indonesian portfolio.
- `index-en.html`: English portfolio.
- `cerita.html` / `cerita-en.html`: existing implementation notes.
- `jual.html` / `jual-en.html`: existing Zentro solutions.

## Portfolio files

- `portfolio.css`: responsive light theme, indigo accents, project flows, reduced motion support.
- `portfolio-data.js`: bilingual project descriptions and verified public repository links. Edit project content here and update static card copy in all three home pages when changing summaries, tags, or titles.
- `portfolio.js`: category and technology filters, native project dialog, dynamic year.
- `assets/romiz-profile.jpg`: profile image from Ahmad Romiz's public GitHub avatar.

Each project opens a detail dialog with its challenge, solution, feature coverage, outcome, and repository or implementation-note link. Native `<dialog>` provides keyboard focus containment and Escape dismissal. Dialogs also close via the close button or backdrop and return focus to the project button. Cards and navigation remain readable without JavaScript; a noscript link points to implementation notes.

The finance demo uses synthetic data. Report count and turnaround metrics describe the existing published operational case study, not demo benchmark results. Internal project descriptions use only previously published implementation notes.

## Run locally

No installation or build required:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages publishes the root of the `main` branch. Asset URLs are relative to support the `/cerita-romiz/` base path.

Design reference: https://sylvaan.github.io/ — light portfolio layout, selected work, technology filters, and project details adapted to Romiz's own content.

# Repository guidance

## Purpose and deployment

- Repository: `cflee/experiments`; a collection of independent static experiments.
- Root `index.html` is the manually maintained experiment directory.
- GitHub Pages serves the root of `main` at `https://cflee.github.io/experiments/`.
- Deployment uses **Deploy from a branch**, `main`, `/ (root)`. Keep `.nojekyll`.
- No framework, build command, package manager, or custom Actions workflow is needed.
- Changes pushed to `main` become public after GitHub Pages finishes deployment.

## Changes and new experiments

- Put each experiment in a lowercase, hyphenated top-level folder with `index.html`.
- Keep each experiment's CSS, JavaScript, and assets within its own folder.
  The root `styles.css` belongs only to the directory page.
- Add new experiment links/descriptions to root `index.html` and update its count.
- Use relative asset and navigation URLs. The deployed project has `/experiments/`
  as a URL prefix; avoid `/styles.css` and other origin-root paths.
- Preserve published folder names and URLs unless explicitly asked to change them.
- Prefer plain HTML, CSS, and JavaScript. Add build tooling only when needed;
  preserve independent folders and existing URLs when introducing it.
- Do not commit secrets: the repository and published content are public.

## Accessibility and validation

- Include `lang`, descriptive titles, and viewport metadata on every HTML page.
- Use semantic HTML, visible keyboard focus, sufficient contrast, and touch-friendly
  controls. Support narrow screens without horizontal overflow.
- Keep essential content accessible without JavaScript and honor reduced motion
  if adding animation. Announce interactive status updates accessibly.
- Validate relative links and asset paths, and check JavaScript syntax when changed.
  Check deployed URLs after publication when deployment access is available.
- Browser previews and layout checks are optional, not required for completion.
  Do not install browsers or browser automation dependencies solely for validation.
  If useful and available, preview with
  `python3 -m http.server 8000 --bind 127.0.0.1` from the repo root.
- There is no test suite. Use checks appropriate to the change; do not introduce
  build infrastructure or dependencies solely for basic static edits.

## Current structure

- `index.html`, `styles.css`: experiment directory.
- `hello-world/`: self-contained mobile-friendly greeting and wave interaction.
- `README.md`: deployment, local preview, and contribution instructions.

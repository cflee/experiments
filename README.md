# Experiments

Small, independent static sites hosted on GitHub Pages.

- Directory: https://cflee.github.io/experiments/
- First experiment: https://cflee.github.io/experiments/hello-world/

## Hosting

GitHub Pages publishes the root of `main` using **Deploy from a branch**.
There is no build step or package installation. `.nojekyll` disables Jekyll
processing so files are served directly. Pushes to `main` trigger publication;
GitHub's generated Pages deployment can take a few minutes.

If Pages needs to be enabled again, open repository **Settings → Pages**, choose
**Deploy from a branch**, select **main** and **/ (root)**, and save.

## Add an experiment

1. Create a lowercase, hyphenated folder such as `color-playground/`.
2. Add its `index.html` and keep its CSS, JavaScript, and assets in that folder.
3. Add a link and description to the root `index.html`; update the displayed count.
4. Check it locally, then push to `main`.

Use relative URLs (`./styles.css`, `./assets/image.png`, `../` for the directory).
Root-relative URLs like `/styles.css` skip the `/experiments/` project prefix
and break on GitHub Pages. Keep existing folder names stable to preserve URLs.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and http://127.0.0.1:8000/hello-world/.
Check narrow mobile widths, keyboard navigation, and browser console errors.
The hello-world button progressively enhances the page when JavaScript is available.

All files in the published tree are public. Never commit secrets or private data.
Build tooling can be introduced later when an experiment needs it; preserve
the existing public URLs and independent folder structure.

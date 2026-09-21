# Publish the preliminary website

The dependency-free static website lives in `dist/`. That directory alone is uploaded by the Pages workflow.

1. In repository **Settings → Pages**, select **GitHub Actions** as the publishing source.
2. In **Actions → Deploy website to GitHub Pages**, select **Run workflow** on `main`.
3. The completed deployment reports the website URL. Without a custom domain, the expected address is `https://bmurdock.github.io/lul3d/`.

Deployments are manual while the website is preliminary. Pushing changes does not publish them automatically. No custom domain is configured; confirm the final domain before changing Pages settings or DNS. The page retains `noindex, nofollow` until its public launch is approved.

For local preview, run `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist` from the repository root, then open `http://127.0.0.1:4173/`.

Do not upload local project context, original emails, or private account files. Preserve the explicit `dist` upload path if the workflow is changed.

Reference: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

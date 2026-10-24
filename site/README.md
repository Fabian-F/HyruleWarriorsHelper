# Host HWDE-Tracker on GitHub Pages

This repository is set up to build and publish the website automatically. The built website goes in this folder's `build` subfolder; it is generated during deployment and is not committed.

## One-time setup

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Make sure the changes are pushed to the `main` branch.

The `Deploy website to GitHub Pages` action builds and publishes the site whenever `main` is updated. You can also start it manually from the repository's **Actions** tab.

Once the action succeeds, the site is available at:

<https://Rue-G19.github.io/HWDE-Tracker/>

## Build the site yourself

With Node.js installed and dependencies restored using `npm ci`, run:

```sh
npm run build:website
```

The generated files will be in `site/build`. Do not rename that output folder without also updating the GitHub Actions workflow. The app uses hash-based URLs so reloading a page works on GitHub Pages.

The GitHub Actions workflow must live in `.github/workflows`, as required by GitHub; the website build output and these instructions are kept in this folder.

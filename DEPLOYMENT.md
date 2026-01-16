# GitHub Pages Deployment Guide

This document explains how to deploy the Clean Air Rewards proposal website to GitHub Pages.

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **Source: GitHub Actions**

2. **Push Changes:**
   - Push this branch to trigger the deployment workflow
   - The workflow will automatically build and deploy on every push

3. **Access Your Site:**
   - Once deployed, your site will be available at:
   - `https://azzamunza.github.io/Incentive-to-quit-smoking-program/`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the static site:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `out` directory:**
   - The `out` directory contains all static files
   - You can upload these files to any static hosting service
   - For GitHub Pages, commit and push the `out` directory to a `gh-pages` branch

## Configuration

The following files configure GitHub Pages deployment:

- **`next.config.js`**: Contains `basePath` and `assetPrefix` for proper routing
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`.nojekyll`**: Prevents GitHub Pages from processing files with Jekyll

## Troubleshooting

### Issue: Page shows 404 or blank screen
**Solution:** Ensure the `basePath` in `next.config.js` matches your repository name.

### Issue: Images or CSS not loading
**Solution:** The `assetPrefix` in `next.config.js` should match your GitHub Pages URL structure.

### Issue: Workflow fails to deploy
**Solution:** Check that GitHub Pages is enabled in repository settings and source is set to "GitHub Actions".

## Local Testing

To test the static export locally:

```bash
npm run build
npx serve out
```

This will serve the static site at `http://localhost:3000` (or another port).

## Notes

- The site is configured for deployment to `https://azzamunza.github.io/Incentive-to-quit-smoking-program/`
- If you fork this repository, update the `basePath` and `assetPrefix` in `next.config.js` to match your repository name
- The GitHub Actions workflow is triggered on pushes to `main` and `copilot/create-clean-air-rewards-website` branches

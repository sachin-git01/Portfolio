# Future Updates

This file tracks improvements that can be added later without forgetting the portfolio direction.

## High Priority

- Add real GitHub, LinkedIn, and project live links in `src/data/portfolio.js`.
- Replace placeholder Vercel URL in `README.md` after deployment.
- Add final Formspree endpoint in `.env` and Vercel environment variables.
- Keep `public/assets/Sachin-Kumar-Resume.pdf` updated with the latest resume.
- Add live demo links for each main project.

## UI Improvements

- Add optional project screenshots or preview videos.
- Add a performance-friendly animated background for non-hero sections.
- Add better mobile spacing checks for very small screens.
- Add a resume download counter or analytics event.
- Add more polished hover states for timeline items.

## Performance Improvements

- Lazy-load the 3D hero scene for faster first paint.
- Code-split Three.js related code to reduce the main bundle warning.
- Compress PNG avatar assets if page load feels slow.
- Use WebP versions of generated avatars for production.

## Content Updates

- Add new internship achievements from ZeTheta.
- Add more certificates with dates and platforms.
- Add hackathon names, roles, and outcomes.
- Update LeetCode problem count regularly.
- Add final CGPA or semester achievements when available.

## Deployment Checklist

- Run `npm run build`.
- Test the site on mobile, tablet, and desktop.
- Check dark and light mode.
- Check all navbar links.
- Check project and mini-project card flip animations.
- Check contact form submission.
- Check resume bot preview and download link.
- Deploy to Vercel.

## Notes

Most text updates should happen in:

```text
src/data/portfolio.js
```

Visual and layout updates usually happen in:

```text
src/index.css
src/components/
```

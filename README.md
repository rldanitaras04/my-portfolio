# Rebie L. Danitaras — Portfolio

A professional, responsive portfolio website for Rebie L. Danitaras, MIT — Assistant Professor II specializing in Information Technology Education, Full-Stack Web Development, Research, and Innovation.

## Project Overview

This is a static portfolio website built with vanilla HTML, CSS, and JavaScript. It is designed to be deployed directly via GitHub Pages with no build step required.

## Technology Stack

- HTML5 (semantic, accessible markup)
- CSS3 (custom properties, responsive layout, dark mode)
- Vanilla JavaScript (no frameworks, no npm dependencies)
- GitHub Pages for hosting

## Folder Structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── documents/
├── README.md
└── .gitignore
```

## How to Customize Profile Information

1. Open `index.html` and replace:
   - `YOUR_EMAIL` with your actual email
   - `YOUR_GITHUB_URL` with your GitHub profile URL
   - `YOUR_LINKEDIN_URL` with your LinkedIn profile URL
   - `YOUR_CANONICAL_URL` with your deployed site URL

2. In `js/script.js`, update the `CONFIG` object at the top:
   ```js
   const CONFIG = {
     email: 'your.email@example.com',
     githubUrl: 'https://github.com/yourusername',
     linkedinUrl: 'https://linkedin.com/in/yourprofile',
     canonicalUrl: 'https://yourusername.github.io/yourrepo'
   };
   ```

## How to Replace Images

- Replace `assets/images/profile-photo.png` with your actual profile photo
- Replace `assets/images/og-image.png` with your Open Graph social preview image

## How to Add Projects

1. In `index.html`, copy an existing project card and modify:
   - Title
   - Category
   - Description
   - Technology stack
   - Status
   - `data-categories` attribute (e.g., `"ai web"`)

2. Add project details in `js/script.js` under `PROJECT_DATA` with a unique key.

## How to Add Achievements

Edit the `ACHIEVEMENTS` array in `js/script.js`:

```js
const ACHIEVEMENTS = [
  { title: 'Your Achievement', description: 'Description here.' },
  // Add more items
];
```

## How to Update Social Links

Search and replace `YOUR_GITHUB_URL` and `YOUR_LINKEDIN_URL` throughout `index.html` and `js/script.js`.

## How to Replace the CV

Place your PDF in `assets/documents/Rebie L. Danitaras Resume.pdf` and update the download link in `index.html` if the filename changes.

## Local Preview Instructions

1. Open `index.html` directly in your browser, or
2. Use a local server (e.g., VS Code Live Server extension) for proper relative path behavior.

## GitHub Pages Deployment Instructions

1. Push your code to a GitHub repository.
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, select **Deploy from a branch**
4. Choose branch: `main`
5. Choose folder: `/root`
6. Click **Save**

Your site will be published at:

```
https://USERNAME.github.io/REPOSITORY/
```

> **Special Case:** If your repository is named `USERNAME.github.io` (e.g., `johndoe.github.io`), your site will be available at:
> ```
> https://USERNAME.github.io/
> ```

## QA Checklist

- [ ] All sections exist and are clickable
- [ ] Dark/light mode toggle works
- [ ] Project filters work
- [ ] Project modal opens, closes, and supports Escape key
- [ ] No console errors
- [ ] Mobile navigation works
- [ ] No horizontal overflow on mobile
- [ ] Footer year is dynamic
- [ ] All placeholder links are clearly marked
- [ ] No fabricated claims or data

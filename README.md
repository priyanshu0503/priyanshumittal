# Priyanshu Mittal — Portfolio

## Setup

```bash
npm install
npm run dev       # development server at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── main.jsx              # entry point
├── App.jsx               # wires all sections — no logic here
│
├── data/
│   └── index.js          # ALL content in one place — edit here
│
├── hooks/
│   └── index.js          # useScrolled, useInView, useScrollTo
│
├── icons/
│   └── index.jsx         # every SVG icon, cleanly named + exported
│
├── styles/
│   ├── tokens.css        # CSS custom properties (colors, fonts, spacing)
│   └── global.css        # reset, shared utilities, section shell
│
├── components/           # reusable across sections
│   ├── OceanCanvas.jsx   # animated canvas background
│   ├── Cursor.jsx        # custom cursor with lerp ring
│   ├── LoadingScreen.jsx # sonar loading animation
│   ├── Nav.jsx           # sticky nav with scroll detection
│   ├── DepthDivider.jsx  # shared section divider
│   └── Footer.jsx
│
└── sections/             # one file + one CSS module per section
    ├── Hero.jsx / .module.css
    ├── About.jsx / .module.css
    ├── Skills.jsx / .module.css
    ├── Projects.jsx / .module.css
    ├── Voyage.jsx / .module.css
    ├── News.jsx / .module.css
    ├── Leadership.jsx / .module.css
    └── Contact.jsx / .module.css
```

## Adding content

All portfolio content lives in `src/data/index.js`.
- Add a project → edit `PROJECTS` array
- Update experience → edit `EXPERIENCE` array
- New news item → edit `NEWS` array
- Change contact details → edit `CONTACT_LINKS`

No other files need to change.

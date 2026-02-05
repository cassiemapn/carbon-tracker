# Copilot Instructions for Cassie's Carbon Tracker

## Project Overview
- **Cassie's Carbon Tracker** is a client-side web app for logging daily activities and estimating personal carbon footprint.
- Built with vanilla HTML, CSS, and JavaScript. No build tools or frameworks are used.
- All data is stored in the browser's `localStorage`—there is no backend or server-side code.

## Architecture & Data Flow
- **Key files:**
  - `js/data.js`: Defines emissions factors (constants) for calculations.
  - `js/calculator.js`: Contains `calculateCarbon(data)` to compute total emissions for a log entry.
  - `js/storage.js`: Handles reading/writing activity entries to `localStorage`.
  - `js/log.js`: Manages the activity logging form and saves new entries.
  - `js/dashboard.js`: Reads entries and updates dashboard totals for today and the week.
- **HTML pages:**
  - `index.html`: Dashboard view (shows totals and trends).
  - `log.html`: Activity logging form.
  - `about.html`, `docs/methodology.html`: Project info and methodology.
- **CSS:**
  - `css/main.css`, `css/dashboard.css`, `css/log.css`: Styles for layout and theming.

## Patterns & Conventions
- **Data Model:** Each entry is an object with `{ date, transport, food, energy, total }`.
- **Emissions Calculation:**
  - Uses constants from `EMISSIONS` in `data.js`.
  - Calculation logic is centralized in `calculator.js`.
- **Storage:**
  - All entries are stored as a JSON array under the `entries` key in `localStorage`.
  - Use `getEntries()` and `saveEntry(entry)` from `storage.js` for all access.
- **UI Updates:**
  - DOM is updated directly via `document.getElementById`.
  - No frameworks or virtual DOM.
- **Navigation:**
  - Navigation is via standard HTML links; no SPA routing.

## Developer Workflow
- **No build step:** Edit HTML, CSS, or JS files directly and refresh the browser to see changes.
- **Testing:** No automated tests are present; manual testing via the browser is expected.
- **Debugging:** Use browser dev tools (Console, Application tab for `localStorage`).
- **Adding new activities:**
  - Update the data model in `data.js` and `calculator.js`.
  - Adjust forms and UI in HTML/JS as needed.

## External Dependencies
- None. All logic and data are self-contained in the codebase.

## Examples
- To add a new emissions factor, update `EMISSIONS` in `js/data.js` and adjust `calculateCarbon` in `js/calculator.js`.
- To change how entries are displayed, edit the relevant DOM manipulation code in `js/dashboard.js` or `js/log.js`.

## References
- See `README.md` for a high-level summary.
- See `docs/methodology.html` for emissions calculation sources.

---

**For AI agents:**
- Always use the provided storage and calculation utilities.
- Follow the data model and update all relevant files when adding new features.
- Keep the UI simple and consistent with existing patterns.

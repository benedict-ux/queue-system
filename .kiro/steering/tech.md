# Tech Stack

- Vanilla HTML/CSS/JavaScript — no build system or bundler
- Firebase JS SDK v10.12.2 loaded via CDN (ES module imports from `gstatic.com`)
- Firestore (Firebase) as the backend database
- VS Code Live Server extension for local development

## Firebase

- Project ID: `queue-system-5a2a0`
- Collection: `orders`
- Order document shape: `{ orderNumber: Number, status: string, timestamp: number, branch: string }`

## Common Commands

- Open `crew.html` directly in a browser, or use VS Code Live Server (`Go Live`) to serve locally.
- No install, build, or compile steps required.

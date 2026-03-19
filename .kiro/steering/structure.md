# Project Structure

```
/
├── crew.html          # Main (and only) UI — crew panel for calling orders
├── .vscode/
│   └── settings.json  # Live Server workspace config
└── .kiro/
    └── steering/      # AI assistant steering docs
```

## Conventions

- All app logic lives inline in `crew.html` (styles in `<style>`, scripts in `<script type="module">`)
- Firebase is initialized and used directly in the HTML file — no separate JS modules
- No external CSS frameworks; styles are hand-written and minimal
- Branch identifier (`EDSA_KAMIAS`) is hardcoded — update directly in `crew.html` if deploying to other branches

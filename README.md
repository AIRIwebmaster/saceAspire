# SACE Aspire Foundation

Responsive React and Vite website for SACE Aspire Foundation. Includes homepage, foundation and vision pages, programmes, application resources, partners, and events.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Vercel deployment

Import this repository into Vercel. Select **Vite**, use `npm run build` and the `dist` output directory. The website uses hash routes (e.g. `/#/programs`), so no Vercel rewrite is needed.

## Notes

- Images and logos are currently served from external URLs, including SACE Aspire's WordPress media library and Unsplash. Ensure those resources remain accessible.
- 2026 programme deadlines reflect the supplied documents; verify before public promotion.
- Contact and student support requests use email links, not backend form submissions.

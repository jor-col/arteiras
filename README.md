## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Workflow

```
npm i
npm run dev
```

## Production

```js
/* sanity.config.ts */
const config = defineConfig({
  /* ... */
  useCdn: true, // <-- set to false for production
  /* ... */
});
```

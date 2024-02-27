
# Stencil SSR Starter

## Description

A simple PNPM-based project to showcase various SSR solutions and how they behave with Stencil compoents. The current SSR solutions are:

- [Next.js](https://nextjs.org/docs)
- [ExpressJS](https://expressjs.com/)
- [Remix](https://remix.run/)

## Setup

Install the project's dependencies:

```bash
# Install the project's dependencies
pnpm install

# Build the Stencil project
pnpm build

# Run ExpressJS server
pnpm start:express

# Run Next.js server
pnpm start:nextjs

# Run Remix server
pnpm start:remix
```

## Notes

This file is part of the repo, but if you make any changes to the Stencil repository, you'll need to uncomment the outputTarget code from `packages/core/stencil.config.ts`, and then manually edit `apps/nextjs/app/proxies-official-output.ts`:

```typescript
// Add 'use client' to the beginning of the file
'use client';
...

// Add 'export default MyComponent' to the end of the file
export default MyComponent;
```

Also note: For now - you need to create a seperate ts file for each component that you want to render in Next.js. And each of those files need to have both `use client` and `export default {ComponentName};`

### ExpressJS

Uses `hydrate.renderToString()` to render the component.

### Next.js

Please see the notes in `apps/nextjs/app/page.tsx` for more information on the modifications required to get `my-component` to render.

### Remix

Remix is not working at the moment.

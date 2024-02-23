
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

The `proxiesFile` from the React Output target is export directly into the `apps/nextjs/app` directory for the sake of simplicity.

There were manual edits required to this output file to make it work with Next.js. The changes are commented in the file, and are as follows:

```typescript
'use client';
...

export default MyComponent;
```

### ExpressJS

Uses `hydrate.renderToString()` to render the component.

### Next.js

Please see the notes in `apps/nextjs/app/page.tsx` for more information on the modifications required to get `my-component` to render.

### Remix

Remix is not working at the moment.

import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { reactOutputTarget as communityReactOutputTarget } from '@stencil-community/react-output-target';

export const config: Config = {
  namespace: 'core',
  globalStyle: 'src/styles/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // Uncomment these output targets for Next.js if you modify the components.
    // Just be sure to manually apply the changes referenced in the README.

    // Official Stencil React Output Target (with Next.js)
    // reactOutputTarget({
    //   componentCorePackage: 'core',
    //   proxiesFile: '../../apps/nextjs/app/proxies-official-output.ts',
    //   includeImportCustomElements: true,
    //   includeDefineCustomElements: false
    // }),


    // Community Stencil React Output Target (with Next.js)
    // communityReactOutputTarget({
    //   outputPath: '../../apps/nextjs/app/proxies-community-output.ts'
    // }),

    // Official Stencil React Output Target (with Remix)
    reactOutputTarget({
      componentCorePackage: 'core',
      proxiesFile: '../../apps/remix/app/proxies-official-output.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};


import dynamic from "next/dynamic";
import { renderToString } from "../../../packages/core/hydrate";

export default async function Home() {
  
  // Render the component to a string via the hydrate function
  const { html } = await renderToString(
    '<my-component first="John" last="Doe"></my-component>'
  );

  // Remove attributes/class that could cause validation errors in Next.js
  const updatedHtml = html
    .replace(/data-stencil-build="[^"]*"/, "")
    .replace(/class="[^"]*"/, "");
    

    // User dynamic import to load the component
  const MyComponent = dynamic(() => import("./proxies-official-output"), {
    loading: () => (
      // While the component is loading, render a placeholder
      <span dangerouslySetInnerHTML={{ __html: updatedHtml }}></span>
    ),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent first="John" last="Doe" />
    </main>
  );
}


import dynamic from "next/dynamic";
import { renderToString } from "../../../packages/core/hydrate";

export default async function Home() {
  const { html } = await renderToString(
    '<my-component first="John" last="Doe"></my-component>'
  );

  const updatedHtml = html
    .replace(/data-stencil-build="[^"]*"/, "")
    .replace(/class="[^"]*"/, "");

  const MyComponent = dynamic(() => import("./proxies-community-output"), {
    loading: () => (
      <span dangerouslySetInnerHTML={{ __html: updatedHtml }}></span>
    ),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent first="John" last="Doe" />
    </main>
  );
}

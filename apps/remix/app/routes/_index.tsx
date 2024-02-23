import type { MetaFunction } from "@remix-run/node";
import { renderToString } from "../../../../packages/core/hydrate";
import { lazy } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default async function Index() {

  const { html } = await renderToString(
    '<my-component first="John" last="Doe"></my-component>'
  );

  const updatedHtml = html
    .replace(/data-stencil-build="[^"]*"/, "")
    .replace(/class="[^"]*"/, "");

  const MyComponent = lazy(() => import("../proxies-community-output"));

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <MyComponent first="John" last="Doe" />
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

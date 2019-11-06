// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---demo-project-readme-md": () => import("../../demo/project/README.md" /* webpackChunkName: "component---demo-project-readme-md" */),
  "component---stories-markdown-start-md": () => import("../../stories/markdown/start.md" /* webpackChunkName: "component---stories-markdown-start-md" */),
  "component---src-components-button-button-md": () => import("../../src/components/button/button.md" /* webpackChunkName: "component---src-components-button-button-md" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}


const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---demo-project-readme-md": hot(preferDefault(require("/Users/zhangboyang/product/deer-ui/demo/project/README.md"))),
  "component---stories-markdown-start-md": hot(preferDefault(require("/Users/zhangboyang/product/deer-ui/stories/markdown/start.md"))),
  "component---src-components-button-button-md": hot(preferDefault(require("/Users/zhangboyang/product/deer-ui/src/components/button/button.md"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zhangboyang/product/deer-ui/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zhangboyang/product/deer-ui/.docz/src/pages/404.js")))
}


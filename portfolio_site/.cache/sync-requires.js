const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\index.js"))),
  "component---src-pages-landing-page-js": hot(preferDefault(require("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\landingPage.js"))),
  "component---src-pages-main-page-js": hot(preferDefault(require("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\main-page.js")))
}


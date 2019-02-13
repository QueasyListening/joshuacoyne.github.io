// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-landing-page-js": () => import("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\landingPage.js" /* webpackChunkName: "component---src-pages-landing-page-js" */),
  "component---src-pages-main-page-js": () => import("C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\src\\pages\\main-page.js" /* webpackChunkName: "component---src-pages-main-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Users\\Josh\\Documents\\joshuacoyne.github.io\\portfolio_site\\.cache\\data.json")


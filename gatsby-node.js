exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/profile/)) {
    page.matchPath = "/profile/*"
    createPage(page)
  }
}
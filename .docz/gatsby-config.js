const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'BB Color',
    description: 'A Design UI library for React',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/zhangboyang/product/deer-ui/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'BB Color',
        description: 'A Design UI library for React',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/zhangboyang/product/deer-ui',
          templates:
            '/Users/zhangboyang/product/deer-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/zhangboyang/product/deer-ui/.docz',
          cache: '/Users/zhangboyang/product/deer-ui/.docz/.cache',
          app: '/Users/zhangboyang/product/deer-ui/.docz/app',
          appPackageJson: '/Users/zhangboyang/product/deer-ui/package.json',
          gatsbyConfig: '/Users/zhangboyang/product/deer-ui/gatsby-config.js',
          gatsbyBrowser: '/Users/zhangboyang/product/deer-ui/gatsby-browser.js',
          gatsbyNode: '/Users/zhangboyang/product/deer-ui/gatsby-node.js',
          gatsbySSR: '/Users/zhangboyang/product/deer-ui/gatsby-ssr.js',
          importsJs: '/Users/zhangboyang/product/deer-ui/.docz/app/imports.js',
          rootJs: '/Users/zhangboyang/product/deer-ui/.docz/app/root.jsx',
          indexJs: '/Users/zhangboyang/product/deer-ui/.docz/app/index.jsx',
          indexHtml: '/Users/zhangboyang/product/deer-ui/.docz/app/index.html',
          db: '/Users/zhangboyang/product/deer-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)

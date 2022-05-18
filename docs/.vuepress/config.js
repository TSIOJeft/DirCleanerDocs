const { defaultTheme } = require('vuepress')

module.exports = {
  title: '清浊',
  description: '简洁实用的清理工具',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], 
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, 
    lastUpdated: 'Last Updated'
  },
  theme: defaultTheme({
      sidebarDepth: 3,
      docsRepo: 'https://github.com/TSIOJeft/DirCleanerDocs',
      docsBranch: 'branch',
      docsDir: 'docs',
      editLinkPattern: ':repo/edit/:branch/:path',
      navbar: [
      {
        text: '开始',
        link: '/guide/GUIDE',
      },
      {
        text: '高级功能',
        link: '/guide/GUIDE.md#高级功能'
      },
       {
        text: '隐私政策',
        children: ['/guide/PRIVACY', '/guide/USERAGREEMENT'],
      },
    ],
  }),
}
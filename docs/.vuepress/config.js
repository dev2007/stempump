module.exports = {
  title: 'STEMpump 中文',
  description: '对 STEMpump 课程的翻译',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: 'STEMpump,stem,science,technology,engineering,mathematics,科学,技术,工程,数学' }]
  ],
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics', {
        'ga': ''
      }
    ],
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': ''
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: '文档首页', link: '/' },
      { text: 'BookHub 书库', link: 'https://pdf.bookhub.tech' },
      { text: '中文文档汇集', link: 'https://docs.bookhub.tech' },
      { text: 'GitHub', link: 'https://github.com/dev2007/stempump' }
    ],
    sidebar: [
      ["/","STEMpump"],
      {
        title: '技术',
        path:'/technology/',
        children: [
          {
            title: 'BuildBox',
            path: '/technology/buildbox/',
            children: [
              '/technology/buildbox/l-welcome-to-buildbox.html',
            ]
          }
        ]
      }
    ]

  }
};
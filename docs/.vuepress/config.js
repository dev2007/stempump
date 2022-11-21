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
        'ba': 'd6e47dcaf9bfcb88a0d1f0aec5c1d509'
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'BookHub 首页', link: 'https://www.bookhub.tech' },
      { text: '中文文档', link: 'https://docs.bookhub.tech' },
      { text: '计算机书库', link: 'https://pdf.bookhub.tech' },
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
              {
                title: '1.设置 BuildBox',
                path: '',
                children:[
                  '/technology/buildbox/l-welcome-to-buildbox.html',
                  '/technology/buildbox/l-getting-started.html'
                ]
              },
              {
                title: '2. 使用 BuildBox',
                path: '',
                children:[
                  '/technology/buildbox/l-level-creator.html',
                  '/technology/buildbox/l-adding-assets-to-the-scene.html'
                ]
              }
            ]
          }
        ]
      }
    ]

  }
};
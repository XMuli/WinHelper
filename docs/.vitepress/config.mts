import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WinHelper",
  description: "Windows System Productivity Tools for Work",
  head: [['link', { rel: 'icon', href: '/logo/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Functions', link: '/functions' },
      { text: 'Licenses', link: '/licenses' },
    ],

    sidebar: [
      {
        text: 'Introduce',
        items: [
          { text: 'Functions', link: '/functions' },
          { text: 'Licenses', link: '/licenses' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XMuli/WinHelper' },
      { icon: 'gmail', link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=xmulitech@gmail.com' },
    ],

    // footer: {
    //   message: 'Enjoy it on Windows 10 / 11.',
    //   copyright: 'Copyright © 2024-2025 <a href="https://github.com/XMuli" target="_blank" rel="noopener">XMuli</a>'
    // },

    editLink: {
      pattern: 'https://github.com/XMuli/WinHelper/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // 允许自定义上次更新的文本和日期格式。
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // search: {
    //   provider: 'local'
    // },
  }
})

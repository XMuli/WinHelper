import { defineConfig } from 'vitepress'

// Shared nav/sidebars per locale (aligned with VitePress default theme config pattern)
const nav = {
  root: [
    { text: '首页', link: '/' },
    { text: '示例', link: '/markdown-examples' },
    { text: '隐私协议', link: '/privacy/open-source-license' }
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Examples', link: '/en/markdown-examples' },
    { text: 'Privacy', link: '/en/privacy/open-source-license' }
  ],
  'zh-tw': [
    { text: '首頁', link: '/zh-tw/' },
    { text: '範例', link: '/zh-tw/markdown-examples' },
    { text: '隱私協議', link: '/zh-tw/privacy/open-source-license' }
  ]
}

const sidebar = {
  root: [
    {
      text: '示例',
      items: [
        { text: 'Markdown 示例', link: '/markdown-examples' },
        { text: '运行时 API 示例', link: '/api-examples' }
      ]
    },
    {
      text: '隐私协议',
      items: [
        { text: '开源许可协议', link: '/privacy/open-source-license' },
        { text: '软件许可协议', link: '/privacy/license' },
        { text: '隐私安全协议', link: '/privacy/privacy-and-data-protection' },
        { text: '功能介绍', link: '/privacy/functions' }
      ]
    }
  ],
  en: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/en/markdown-examples' },
        { text: 'Runtime API Examples', link: '/en/api-examples' }
      ]
    },
    {
      text: 'Privacy',
      items: [
        { text: 'Open Source License', link: '/en/privacy/open-source-license' },
        { text: 'Software License', link: '/en/privacy/license' },
        { text: 'Privacy & Data Protection', link: '/en/privacy/privacy-and-data-protection' },
        { text: 'Feature Overview', link: '/en/privacy/functions' }
      ]
    }
  ],
  'zh-tw': [
    {
      text: '範例',
      items: [
        { text: 'Markdown 範例', link: '/zh-tw/markdown-examples' },
        { text: '運行時 API 範例', link: '/zh-tw/api-examples' }
      ]
    },
    {
      text: '隱私協議',
      items: [
        { text: '開源許可協議', link: '/zh-tw/privacy/open-source-license' },
        { text: '軟體許可協議', link: '/zh-tw/privacy/license' },
        { text: '隱私與資料保護', link: '/zh-tw/privacy/privacy-and-data-protection' },
        { text: '功能介紹', link: '/zh-tw/privacy/functions' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'Quick Utilities Suite',
  description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
  head: [
    // 现有 favicon
    ['link', { rel: 'icon', href: '/home_page/favicon.ico' }],

    // ➤ Umami 统计代码
    [
      'script',
      {
        defer: '',
        src: 'https://umami.xmuli.tech/script.js',
        'data-website-id': '718d56f4-8cca-4c8b-b4ee-45cb3e103d63'
      }
    ]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav.root,
        sidebar: sidebar.root
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-tw/',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav['zh-tw'],
        sidebar: sidebar['zh-tw']
      }
    }
  },
  themeConfig: {
    logo: '/home_page/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/XMuli/QuickUtilitiesSuite' },
    { icon: 'gmail', link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=xmulitech@gmail.com&su=%5BQuick%20Utilities%20Suite%5D%20Suggestions%20and%20Feedback' }]
  }
})

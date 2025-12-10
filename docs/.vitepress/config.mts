import { defineConfig } from 'vitepress'

// Shared nav/sidebars per locale (aligned with VitePress default theme config pattern)
const nav = {
  root: [
    { text: '首页', link: '/' },
    { text: '示例', link: '/markdown-examples' }
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Examples', link: '/en/markdown-examples' }
  ],
  'zh-tw': [
    { text: '首頁', link: '/zh-tw/' },
    { text: '範例', link: '/zh-tw/markdown-examples' }
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
    }
  ],
  en: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/en/markdown-examples' },
        { text: 'Runtime API Examples', link: '/en/api-examples' }
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
    }
  ]
}

export default defineConfig({
  title: 'Quick Utilities Suite',
  description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/XMuli/QuickUtilitiesSuite' }]
  }
})

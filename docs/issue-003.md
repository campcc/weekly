---
title: RN 0.73、VSCode November 2023、StyleX 开源、Astro 4.0、Bento box 设计趋势、TinyLD
titleImage: https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-003.png
publishedAt: 2023/12/11
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-003.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 003 期, 发表于 2023/12/11, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [React Native 0.73 发布](https://reactnative.dev/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks) 新版本增加了对 Hermes 调试的改进、稳定的符号链接支持、Android 14 支持和新的实验性功能。Metro 现在支持解析符号链接，这使得 React Native 可以与 monorepo 设置一起使用，此外 React Native 团队正在开发一种新的 JavaScript 调试器体验，旨在取代 Flipper，0.73 版本中提供了技术预览版；
- [VSCode November 2023](https://code.visualstudio.com/updates/v1_85) Visual Studio Code 2023 年 11 月发布版，带来了许多更新，包括浮动编辑窗口、可访问视图工作流、JavaScript 堆快照、内联提示跳转至 TypeScript 定义、Python 类型层次结构显示、GitHub Copilot 行内聊天改进、Rust 代码解释和源代码控制进出视图等特性；
- [StyleX 开源](https://stylexjs.com/blog/introducing-stylex/) StyleX 是 Facebook 的一个 CSS-in-JS 完全类型化的样式框架，支持 CSS 的表达性子集，跨文件和组件边界合并样式，目前已正式开源，采用 MIT 许可，开发者可以在 GitHub 上使用并为其贡献，包括错误修复，改进和想法等；
- [Astro v4.0 正式发布](https://astro.build/blog/astro-4/) 继上周 4.0 Beta 后，本周 Astro 4.0 版本正式发布。Astro 是一个网页开发工具，该版本的高光特点包括 Astro 开发工具栏、国际化（i18n）路由、增量内容缓存（实验性）、新的视图转换 API、重新设计的日志和文档等；
- [Vitest v1.0 发布](https://github.com/vitest-dev/vitest/releases/tag/v1.0.0) 1.0 版本对 API 进行了重大更改，增加对 pool 和 poolOptions 的支持，移除了旧标志，并增加了对多个同时子进程的支持；同时新增了 Marko 文件的代码覆盖、provide/inject API、expectTypeOf 错误信息改进、test.sequential API 等功能。

## 优质文章

- [Micro Frontend Synergy: Techniques for Effective Communication](https://medium.com/@rk-tech/micro-frontend-synergy-techniques-for-effective-communication-97df104931ed) 本文探讨了微前端中集中通信方式，微前端是将大型前端应用分解为独立运行、可独立部署的小型应用，可以提高开发效率，降低复杂性，提高可维护性。微前端之间的通信方式有全局状态管理、事件总线和共享数据库等。作者提出了一种新的沟通技术——Synergy，它是一种基于事件的通信方式，可以实现微应用之间的解耦。Synergy 有三个主要组件：事件源、事件处理器和事件监听器，作者通过一个实例展示了如何使用 Synergy 进行微前端通信；
- [1分钟带你了解Bento box设计趋势](https://mp.weixin.qq.com/s/pXePIwnERlZSUSHqNO_GFQ) 便当盒(Bento box)设计风格或 Bento UI 是一种设计趋势，它融入了极简主义和东方传统美学，追求简单直接的解决方案，让用户能够轻松理解并操作。本文探讨了 Bento box 设计趋势的起源和发展，并结合设计应用案例，介绍了 Bento UI 的设计特征，包括具有视觉吸引力的层次感、基于网格的响应式布局、内容和功能的清晰划分、简约优雅和现代感；
- [SPA 如何达到 SSR 一样的秒开效果？](https://mp.weixin.qq.com/s/EsriwdyM2zLK7qmshDFMVw) SPA（单页应用）在初次加载时可能会有较长的白屏时间，影响用户体验，本文探讨了预渲染的解决方案，将页面在打包期间渲染成静态 HTML 文件。其核心流程包括定义一个 generate 函数和一个 Renderer 类，其中 generate 函数用于处理参数和流程处理，Renderer 类用于启动无头浏览器生成 HTML。在生成 HTML 的过程中，使用了 puppeteer 库来控制 Chrome 或 Chromium 的行为，模拟人类的操作，获取页面的HTML；
- [字节：Chrome 插件开发指南和实践](https://mp.weixin.qq.com/s/qPeZZPwUGX2eRi4Q1AGfcw) 本文介绍了 Chrome 插件的整体架构，包括插件页面、目标页面、Popup 和 Devtools 等概念，然后详细介绍了如何开发和调试一个 Chrome 插件，以及如何使用 Puppeteer 对插件进行 E2E 测试等；
- [Beyond ES6: ES7 to ES13](https://rahuulmiishra.medium.com/beyond-es6-es7-to-es13-3f98f6202fd2) 本文详细介绍了 ES6 之后的 JavaScript 版本，从 ES7 到 ES13 的新特性。

## 工具资源

- [TinyLD](https://github.com/komodojp/tinyld) 一个 NodeJS 库，可以用来判断输入的一段文字是什么语言，支持 [62 种语言](https://github.com/komodojp/tinyld/blob/develop/docs/langs.md)；
- [AI Image Captions](https://felix.link/apps/captions) 一个图片介绍词生成工具，上传图片或输入图片的 URL 地址，会自动生成图片的介绍，支持指定生成的语言、介绍的风格和长度等参数；
- [Ai Cute Wallpapers](https://aicutewallpapers.com/) 免费的 AI 壁纸生成工具，支持下载。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

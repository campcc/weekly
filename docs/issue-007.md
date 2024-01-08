---
title: 2023 JavaScript Rising Stars、2024 CSRankings、Vue 3.4、Vue Devtools、TinyEngine
titleImage: https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-007.png
publishedAt: 2024/01/08
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-007.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 007 期, 发表于 2024/01/08, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [2023 JavaScript Rising Stars 发布](https://risingstars.js.org/2023/en) 一年一度的 JavaScript Rising Stars 发布，shadcn/ui 成为最受欢迎的项目，前端框架上的增长上，React、htmx 不相上下，Next.js 仍然是后端/全栈开发的首选项目，Bun 成为年度最受欢迎的构建工具，CSS in JS 方案中，Stylex 和 UnoCSS 排名前列，值得一提的是，这是作者总结的第八个 Rising Stars 了，不禁让人思考，明年是否可能由人工智能来接手这个任务？
- [2024 CSRankings](https://csrankings.org/#/fromyear/2023/toyear/2024/index?all&world) 2024 CSRankings 全球计算机科学排名发布，在热门的 AI 板块，清华、北大、上交分列 TOP 3，CMU 和浙大并列第 4。AI TOP 10 中的中国高校，还包括人大、南京大学、复旦大学、哈工大等；
- [Vue 3.4 发布](https://blog.vuejs.org/posts/vue-3-4) Vue 发布了 3.4 版本，新版本包含了更快的模板解析器和改进的响应性系统，带来了 defineModel 的稳定版、绑定 props 的新的同名缩写、改进的水合错误消息，删除了一些废弃的功能如全局 JSX 命名空间和响应性转换等；
- [Vue DevTools 开源](https://mp.weixin.qq.com/s/KpzGUQwIeFm8iNhLU9uWig) Vue 开源了新一代的开发者工具（DevTools），提供了多种功能，包括概述、页面、组件、文件、时间线、路由、状态管理和模块之间的关系等，现在可以通过 Vite 插件或独立应用来体验新的 DevTools；
- [TinyEngine 服务端开源](https://mp.weixin.qq.com/s/8juH9EAVe6SsHW23vGiEIg) 华为云低代码引擎 TinyEngine 服务端正式开源，提供了低代码底层能力，并集成了人工智能，支持图元和复杂组件的高性能拖拽，多个场景，如资源编排、流程编排、服务端渲染、模型驱动、移动端、大屏端以及页面编排的低代码平台开发。

## 优质文章

- [7 front-end web development trends for 2024](https://www.frontendmentor.io/articles/7-frontend-web-development-trends-for-2024-qtBD0H0hY3) 本文概述了 Web 前端开发 2024 年的 7 大趋势，包括 Ark UI、Open Props 和 Shadcn UI 等样式解决方案、AI 工具（如GitHub Copilot）整合到工作流、Astro 或 Next.js 等 SSR/SSG 框架、BaaS 平台（如 Xata 和 Supabase）构建全栈应用程序、无障碍、VS Code 高级功能和扩展提高效率、TypeScript 等；
- [React Server Components: the Good, the Bad, and the Ugly](https://www.mayank.co/blog/react-server-components/) 本文探讨了 React Server Components 的概念和用法，React 在处理服务器端渲染和用户交互方面的改进，以及在使用 React 框架时可能会遇到的限制和问题。此外，作者还指出了 Next.js 框架中的一些设计决策的不完善；
- [如何使用 Rust 锈化前端工具链](https://mp.weixin.qq.com/s/Zlc-G6oD63mpSUVBiOs6FA) Rust在前端领域的应用不断增长，本文介绍如何使用 Rust 开发前端工具链，包括使用 WASM 和 Node addons 两种方式，重点介绍了如何使用 napi-rs 进行 JavaScript 和 Rust 之间的互相调用、调试和发布 Node 扩展，以优化开发工具并提高性能等；
- [Introduction to HTMX](https://refine.dev/blog/what-is-htmx/#introduction) 本文是对今年热门框架 htmx 的一个介绍，htmx 是一个小型的 JavaScript 库，压缩后只有 14k，允许开发人员使用超文本标记语言（HTML）创建尖端的用户界面，它通过属性直接在 HTML 中提供对 AJAX、CSS过渡、WebSockets 和服务器发送事件的访问，这种仅使用标记实现交互性的框架对开发人员来说是一个重大改变；
- [A comprehensive guide to the dangers of Regular Expressions in JavaScript](https://www.sonarsource.com/blog/vulnerable-regular-expressions-javascript/) 本文探讨了 JavaScript 中正则表达式（RegEx）的危险性以及它们可能引入的潜在漏洞，正则表达式可能导致像 ReDoS 这样的漏洞，引发性能问题甚至停机，作者围绕 ReDoS，深入探讨了其机制，重点介绍了当一个正则表达式无法匹配字符串的一部分时发生的回溯过程，以及一个缓解策略。

## 工具资源

- [IP-Adapter](https://ip-adapter.github.io/) 腾讯 AI Lab 开源的一种有效且轻量级的适配器，用于为预训练的文本到图像扩散模型实现图像提示功能；
- [Triangle Patterns](https://sinqi.tools/triangle) 一个在线的三角渐变图案的生成工具网站，支持多种参数；
- [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/html/split/) 一个由著名的技术作者 Beej 新发布的计算机网络底层概念的英文教程；
- [copilot-gpt4-service](https://github.com/aaamoon/copilot-gpt4-service) 一个免费使用 GPT-4 工具，作者发现 Github Copilot Chat 的底层是调用 ChatGPT 接口，理论上只要拥有 Github Copilot 账号，就能无限制使用 ChatGPT 的 GPT-4 模型。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

---
title: OneFlow 技术年货、Ant Design Web3 发布、V8 新编译器、NodeJS 2023 Performance
titleImage: https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-006.png
publishedAt: 2024/01/02
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-006.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 006 期, 发表于 2024/01/02, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [OneFlow 免费大模型电子书](https://mp.weixin.qq.com/s/LucD-KkRHBGg-u6Sc8PuOw) OneFlow 社区发布了 100 多篇与 ChatGPT 相关的文章，制作成一份超过 800 页的电子书，免费赠送给每一位用户。这份电子书分为七大板块，包括揭秘 ChatGPT 技术原理、语言大模型的演进、开源语言大模型的崛起、语言大模型的预训练、微调与推理、AI 底层软硬件协同优化、OpenAI 的通用人工智能洞察以及 AI 的应用与未来；
- [Ant Design Web3 发布 1.0](https://mp.weixin.qq.com/s/OPGftCEiElt8A3TqJFfB8Q) 基于 Ant Design 的 Web3 React 开源组件库正式发布，提供了一系列的组件，可以快速构建去中心化应用（DApp）；
- [V8 is Faster and Safer than Ever](https://v8.dev/blog/holiday-season-2023) V8 推出了 Maglev 和 Turboshaft 两种新的编译器，大大提高了性能和编译速度，编译器亮点包括，Turboshaft 新架构，新的 JavaScript 和 WebAssembly 功能支持，引入 WebAssembly 垃圾回收(WasmGC)，沙箱、模糊测试和控制流完整性(CFI)等；
- [State of Node.js Performance 2023](https://blog.rafaelgss.dev/state-of-nodejs-performance-2023) Node.js 发布 2023 年性能概况，今年 Node.js 带来了诸多性能改进，包括属性访问、URL 解析、缓冲区/文本编码和解码、启动/进程生命周期时间以及 EventTarget 等。

## 优质文章

- [Building a simple CLI tool with modern Node.js](https://evertpot.com/node-changelog-cli-tool/) 本文介绍了如何用 Node.js 的标准库，不加载任何外部模块的情况下，写一个 “Node Changelog CLI Tool” 命令行工具，支持查看项目的更新日志，以及特定版本或特定日期范围内的更新日志；
- [WebContainer 在支付宝云开发的实践](https://mp.weixin.qq.com/s/-8eyuccxtnomVLT5p8YK6g) 本文介绍了在支付宝云开发中使用的 WebContainer 技术以及对语言服务的优化和挑战。通过 WebContainer 运行 Node.js 的能力将完整的语言服务运行在浏览器上，并通过 CodeBlitz 和 Opensumi 的模块化和高可定制性对 IDE 的插件逻辑进行调整和修改。同时，通过 WebContainer 提供的 Node.js 能力在浏览器中安装 node_modules 依赖，实现对第三方依赖的语法提示，提供类似于本地开发的体验;
- [Frontend Security Checklist: Proactive Measures and Best Practices for All Frameworks](https://lebohire.com/posts/trevor-indrek-lasn/frontend-security-checklist-proactive-measures-and-best-practices-for-all-frameworks) 本文概述了前端应用程序安全的概况，深入探讨了在 React、Angular 和 Vue.js 等各种前端框架中遇到的常见漏洞，如 XSS、CSP、CSRF、IDOR、Scrape Shield、DDoS 等，不仅提供了对这些漏洞的理解，还提供实用的解决方案和代码示例，以有效地减轻它们的影响；
- [携程商旅在 Atomic CSS 下的探索](https://mp.weixin.qq.com/s/L387QjYFE7edrKtk1kMUeA) 本文介绍了携程商旅在 Atomic CSS 下的探索，以及 Atomic CSS 的好处和应用。通过使用 Atomic CSS，可以减少样式文件体积，提升页面加载性能，文章还介绍了 Facebook 最近开源的 Atomic CSS 解决方案 stylex，以及其在项目中的应用。最后，介绍了如何使用 stylex 库来创建自定义主题的按钮，并展望了 Css-In-Js 解决方案的未来发展；
- [Deep Cloning Objects in JavaScript, the Modern Way](https://www.builder.io/blog/structured-clone) 本文介绍了 JavaScript 中的一种深度克隆技术——Structured Clone，原理是通过递归复制对象的所有属性来实现深度克隆，优点是可以处理循环引用和复杂的数据类型，但是也有一些限制，比如不能复制函数和错误对象。文章还介绍了如何使用 Structured Clone，以及它的一些实际应用场景，比如在 Web Workers 中传递数据，以及在 IndexedDB 中存储和检索数据。

## 工具资源

- [The history of Frontend](https://frontendhistory.com/) 一个站点，记录了 1990 ~ 2023 前端技术的发展史；
- [Rspress](https://rspress.dev/zh/) 一个基于 Rspack 的静态站点生成器，字节 Web Infra 团队出品；
- [Teamlinker](https://github.com/Teamlinker/Teamlinker/blob/main/README-ZH-CN.md) 一个开源的团队协作平台，包含项目、Wiki、日历、会议、聊天和网盘等功能。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

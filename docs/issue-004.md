---
title: CSS Wrapped 2023、Safari 17.2、Netlify 2023 调查报告、Oxlint、Antd Mini 微信小程序
titleImage: https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-004.png
publishedAt: 2023/12/18
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-004.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 004 期, 发表于 2023/12/18, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [CSS Wrapped: 2023](https://developer.chrome.com/blog/css-wrapped-2023?hl=en) 谷歌 Chrome 团队发布 2023 年 CSS 发展总结，介绍了今年 CSS 语言和功能的更新。其中包括三角函数、CSS 嵌套、subgrid、text-wrap、color-mix、容器查询、:has() 选择器、线性转换等诸多特性以及对应的浏览器支持情况；
- [Safari 发布 17.2](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/) Safari 17.2 版本包含了 39 个新特性和 169 个问题修复，其中新特性包括 CSS 嵌套、新的尺寸单位 rcap、rex、ric 和 rch、CSS Counters、Mask border、预加载响应式图片，还包括对 JavaScript 新特性的支持，如 BigInt 和 Intl.DisplayNames，可选链和空值合并等；
- [The State of Web Development 2023](https://www.netlify.com/pdf/the-state-of-web-development-2023.pdf/?submissionGuid=505ab3ff-88c8-423f-84e6-ad12f14123ba) Netlify 发布 2023 年 Web 开发者调查报告，大家比较关注的前端框架部分，React 仍是目前使用最多的前端框架，但 Astro 成为了今年最受开发者欢迎的框架，Tailwind CSS 势头很猛，使用率上几乎接近 Bootstrap，成为今年最受欢迎的 CSS 框架，Monorepo 框架上，Nx 和 Lerna 使用率不相上下，但 Turborepo 成为今年最受欢迎的 Monorepo 框架；
- [Oxlint 已经可用](https://oxc-project.github.io/blog/2023-12-12-announcing-oxlint.html) Oxlint 是一个 JavaScript linter，旨在捕捉错误或无用代码，而无需任何默认配置。它比 ESLint 快 50-100 倍，在实际场景中，Shopify 报告称他们之前需要 75 分钟的 ESLint 运行现在只需要 10 秒；
- [Ant Design Mini 支持微信小程序](https://mp.weixin.qq.com/s/eyAd77KBjpyowz35DO3EXQ) Ant Design Mini 是原支付宝小程序 UI 组件库，目前已经支持微信小程序，当前版本还处于 Beta 阶段，完成了 16 个核心组件的适配.

## 优质文章

- [Extending Responsive Video with HTML Web Components](https://calendar.perfplanet.com/2023/extending-responsive-video-with-html-web-components/) 本文探讨了响应式视频以及如何使用 HTML Web 组件来扩展原生视频行为。文章首先介绍了 HTML Web 组件的基本概念，然后详细介绍了如何使用 HTML 模板、JavaScript 和自定义元素 API 创建一个响应式视频组件，其中包括使用 Shadow DOM 来封装组件的样式和结构，CSS 变量来自定义组件的样式，HTML 模板和插槽来实现组件的内容投影，这些技术使得开发者可以创建出高度可定制和可重用的响应式视频组件；
- [淘宝双十一互动图片和文字的处理方案](https://mp.weixin.qq.com/s/Ej0krAeYh86mubRSpC4brg) 本文介绍了淘宝双十一互动图片和文字的处理方案，包括优化图片、CDN 参数调整、选择适合不同机型的图像格式、图片处理逻辑以及特殊字体使用的方案等；
- [Information Extraction with Large Language Models - Parsing Unstructured Data with GPT-3](https://marcotm.com/articles/information-extraction-with-large-language-models-parsing-unstructured-data-with-gpt/) 文章探讨了使用大型语言模型（如GPT）进行信息提取和解析非结构化数据的方案，作者演示了一个实例，使用 GPT-3 将公司的招聘帖子转成 JSON 数据；
- [Guide to React Suspense and use hook for busy bees](https://sinja.io/blog/guide-to-react-suspense) 一份 React Suspense 和 use Hook 的使用指南。作者介绍了 React 的 Suspense 的基本概念，在 React 18 的版本中的重要升级，如服务端渲染流和局部 hydration 的支持，然后介绍了如何使用 Suspense 进行组件的懒加载和数据获取，以及 Suspense 的一些高级用法，如并行数据获取、依赖管理、错误处理等；
- [Writing an OS in Rust](https://os.phil-opp.com/zh-CN/) 一份博客系列文章，探讨从零开始用 Rust 编程语言写一个操作系统。作者由浅入深地演示和讲解了用 Rust 编写操作系统的全部过程，包括最基础的内核构建、异常处理、硬件中断、内存管理以及异步等关键部分，以及操作系统设计的各种常见问题和解决办法，不仅提供了完整的教程，同时也在 Github 上公开了所有相关的源代码；
- [A Chain Reaction](https://overreacted.io/a-chain-reaction/) 连锁反应，前 React 核心开发者 Dan Abramov 的一篇文章，通过一连串的例子，由浅入深地解释了如何实现一个 JSX 的翻译器；
- [Preparing For Interaction To Next Paint, A New Web Core Vital](https://www.smashingmagazine.com/2023/12/preparing-interaction-next-paint-web-core-vital/) 本文介绍了即将取代 First Input Delay 作为核心网页重要指标之一的 Interaction to Next Paint，探讨了这两个指标的区别，以及为什么我们需要一种新的方法来衡量交互响应性，如何对网站性能进行优化，以顺利过渡到最新的核心网页重要指标。

## 工具资源

- [Imagine](https://imagine.meta.com/) Meta 公司推出的免费文生图工具，使用 Facebook 和 Instagram 的 11 亿张图片作为训练集；
- [RoomGPT](https://github.com/Nutlope/roomGPT) 一个开源软件，支持上传一张房间照片，利用 AI 进行重新设计；
- [Trippy](https://trippy.cli.rs/) 一个网络问题分析工具，结合了 traceroute 和 ping 的功能。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

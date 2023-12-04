---
title: Biome wins $20k、XState v5、Astro 4.0、Vectorizer.ai、一组图了解编程语言发展史、10s 生成 LOGO
titleImage:
publishedAt: 2023/12/04
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-002.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 002 期, 发表于 2023/12/04, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [Biome wins $20k via the Prettier challenge](https://prettier.io/blog/2023/11/27/20k-bounty-was-claimed) JS 语言格式化工具 Prettier 发布了一个挑战，提出谁能用 Rust 语言重新实现它，并通过所有测试用例，就能获得2万美元，因为它们自己没有资源做这件事，结果不到两周的时间，[Biome](https://biomejs.dev/) 就赢得了这个挑战。Biome 是一个为 Web 项目设计的工具链，它不仅是一个与 Prettier 的兼容性达到 96% 的 Formatter，也是一个高性能的 Linter，且独立于 Node.js，提供 LSP 支持；
- [Astro 发布 4.0 Beta](https://astro.build/blog/astro-4-beta/) Astro 是一个多功能的 Web 框架，用于构建快速、以内容为中心的网站，本周 Astro 发布了首个 4.0 测试版，整合了最新的 Vite 5 版本。大多数项目可以轻松升级到 Astro 4，代码变动极小甚至不需要。开发者可通过安装 astro@beta 包在现有应用中试用新测试版；
- [XState 发布 V5](https://stately.ai/blog/2023-12-01-xstate-v5) XState 是一个用于现代 Web 的 JavaScript 和 TypeScript 的有限状态机和状态图，可以帮助开发者管理复杂的应用状态，v5 版本引入了包括 Actor 状态机功能，大幅改进了 TypeScript 开发人员体验，减小了包大小，重新整理文档并添加了许多新示例；
- [Bun 发布 v1.0.15](https://bun.sh/blog/bun-v1.0.15) 这个版本修复 23 个问题。带来了性能提升，让 TSC 启动快 2 倍，Prettier 快 40%，同时支持 TensorFlow，错误语法高亮，标准的 WebSocket Client 等。
- [Node 发布 v18.19.0](https://nodejs.org/en/blog/release/v18.19.0) 新版本的主要更新包括：新增版本的 npm 10 支持；对模块系统的默认类型进行调整，通过添加新的标志 --experimental-default-type；提升了内置测试代码的运行环境；新增了一种名为 'DomainToUnicode' 的 API 接口；对 Buffer、URL 等类别添加了一些新的 JSDoc 信息等；在测试环节中，对部分行为进行了重新定义与修正，并新增了一些测试范式。

## 优质文章

- [Prettier's CLI: A Performance Deep Dive](https://prettier.io/blog/2023/11/30/cli-deep-dive) Prettier 团队聘请 Fabio 来加速 Prettier 的命令行界面（CLI）。在这篇文章中，Fabio 分享了他在尝试加速 Prettier 命令行接口 (CLI) 过程中的优化经验。主要优化方向包括：加快文件的快速查找，优化路径的解析，对查找及配置步骤进行缓存以及调整 CLI 输出。此外，Fabio 还提出其未来可能进行的优化方向，包括核心格式化函数的优化，进一步优化缓存功能及批量日志输出，以及对视觉效果的优化等；
- [腾讯技术工程：一组图了解编程语言发展史](https://mp.weixin.qq.com/s/PGUv_10uDmE8qAoS6TZcJg) 本文以一组生动形象的图集，从时间维度介绍了从计算机被发明至今的几十年里，一些流行的、具有历史影响力的编程语言；
- [Why Choose Next.js - Top 5 Performance Benefits](https://cult.honeypot.io/reads/top-nextjs-performance-benefits/) 本文探讨了选择 Next.js 的五大性能优势，Next.js 是一个灵活的 React 框架，逐渐成为工程师构建高性能应用程序的首选，对于网页应用性能的提升，Next.js 有五大性能优势，包括服务器端渲染、静态生成、自动优化、快速刷新和增量静态生成，此外 Next.js 还提供了一系列用户友好的功能，例如错误处理，快速刷新，内置 SEO 支持，预构建的分析功能和与第三方平台的无缝整合；
- [How my love of weird electric vehicles landed me on 100 million Chinese TVs](https://electrek.co/2023/11/21/my-love-of-weird-electric-vehicles-landed-me-on-china-state-tv/) 作者是美国的一个电池专家，也是一个的电动车爱好者，最初只是猎奇，不料发现阿里巴巴上面，都是又奇怪又便宜的电动车。他忍不住就买了一辆，托运到美国，从此一发不可收拾，写了很多中国低价电动车的介绍文章，在美国出名了，后来被邀请到中国国家电视台进行访谈；
- [Electron：Ecosystem 2023 Recap](https://www.electronjs.org/blog/ecosystem-2023-eoy-recap) Electron's 开发者回顾了 Electron 在 2023 的整个生态，其中包括 Electron Forge 7 的推出，这个工具用于打包和分发 Electron 应用，增加了 Google Cloud Storage 发布器和 ESM forge 配置文件的支持，并可以并行运行 Makers 以提高效率，此外，为了提供更好的静态存储自动更新，Electron 针对无服务器自动应用更新进行了改进。与此同时，Electron 还将所有第一方工具统一到 @electron / 命名空间下。
- [生成式 AI 应用落地小结](https://mp.weixin.qq.com/s/-WehJoGc8ZG1aei-9XRoig) Thoughtworks 在 AutoDev 和 Studio B3 等项目中进行了实践，并提出了使用多个模型来支持不同子任务的观点。本文讨论了在 JetBrains IDE 中使用的多种模型，包括本地向量化模型、OpenAI 问答模型、本地模型、单行代码补全模型、云端代码补全模型和拼写检查模型。根据不同的场景，需要结合多种机器学习模型来增强人类。

## 工具资源

- [Vectorizer.ai: Convert your JPEG and PNG Images to SVGs with AI](https://vectorizer.ai/) 一个 AI 转换 SVG 的工具，可以将 JPEG 或 PNG 图片转换为 SVG，试了下效果还不错，目前 Beta 版本是免费的；
- [腾讯 AIDesign](https://ailogo.qq.com/guide/brandname) 一个 AI 生成 LOGO 的工具，10秒创建一个 LOGO，只需要输入品牌名称，选择行业分类和一些联想关键词，最后选择一个品牌主色就可以生成 LOGO；
- [Animotion.dev](https://animotion.dev/) 一个可视化的 CSS 动画构建工具，允许用户通过拖拽、调整大小、旋转、裁剪等操作来创建 CSS 动画，内置了非常多的动画和缓动特效。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

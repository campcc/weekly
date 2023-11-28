---
title: 字节 Rsbuild 0.1、清华大学未来十大变革科技榜单、腾讯 ISUX 设计趋势速递、TypeScript 5.3
titleImage: https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-001.png
publishedAt: 2023/11/27
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-001.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 001 期, 发表于 2023/11/27, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

- [字节 Rsbuild v0.1 发布](https://mp.weixin.qq.com/s/dorbW52HcJCaJaL9yybC3Q) Rsbuild 是基于 Rspack 的构建工具，旨在提供更容易上手和开箱即用的功能。它可以帮助减少 90% 的配置，并获得10倍的构建速度。Rsbuild 具有易于配置、性能优先、插件生态、产物稳定和框架无关等特性。它集成了基于 Rust 的高性能工具，提供了 5~10 倍的构建性能和更轻量的依赖体积。Rsbuild 还内置了一个轻量级的插件系统，兼容大部分的 webpack 插件和所有的 Rspack 插件；
- [腾讯 ISUX「十一月」行业设计趋势速递](https://mp.weixin.qq.com/s/rNSwQT35yWkVk4PMceAoyg) 本文介绍了一系列与设计和科技相关的新闻和趋势。其中包括 Telegram 增强回复消息的能力、Google 推出自动生成广告工具、YouTube 测试聊天机器人YouChat、Windows 11 发布重磅更新、Meta开发沉浸式社交聊天机器人、方正字库发布 2023 字体趋势报告等内容；
- [清华大学发布“青年最关注的改变未来十大变革科技”榜单](https://mp.weixin.qq.com/s/VcpzuojCQpAs_Nea0Lns9g) 这个榜单由 9000 余名清华师生投票选出。入选的十项前沿科技包括：超快激光加工、第六代移动通信技术、第四代半导体材料、动力电池回收技术、高温超导材料、类脑计算、类器官芯片、生物3D打印、生物质能碳捕集与封存、通用人工智能。这些科技领域的发展将推动科技创新，对社会生产力发展产生深远影响。同时，《探臻科技评论》还发布了《下一代创新科技》出版物，解读了重点领域科技成果的发展历程及当前进展；
- [TypeScript 发布 5.3](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/) TypeScript 5.3 的新特性包括导入属性和稳定地支持在所有模块模式中使用 resolution-mode，针对布尔值的缩窄对比，以及通过 Symbol.hasInstance 进行 instanceof 缩窄。此外，TypeScript 5.3 还进行了性能改进，通过跳过 JSDoc 解析以进行优化，比较非标准化交集以进行优化，以及在 tsserverlibrary.js 和 typescript.js 间进行整合等提升编译速度、减少内存占用，开发团队鼓励开发者可以尽快升级到这个新版本；
- [Hyper 发布 1.0](https://seanmonstar.com/blog/hyper-v1/) Hyper 是一个用 Rust 编写的 HTTP 库，旨在提供高性能和易用性，Hyper 1.0 的新特性包括 HTTP/2 支持、异步I/O、流式请求和响应等。该库已经被 Cloudflare, Discord 等企业在其关键系统中广泛使用，并受到 AWS 和 Embark 等公司的高度评价，开发团队计划在未来支持更多的HTTP特性、改进API设计并进一步提升性能。

## 优质文章

- [Combining AI with React for a Smarter Frontend](https://thenewstack.io/combining-ai-with-react-for-a-smarter-frontend/) 本文讨论了在 React 应用中集成人工智能技术的方法和技术。作者建议使用 Next.js 作为技术栈的基础，并与 OpenAI 的Chat GPT 和 GPT 进行连接。作者还提到了 LangChain 作为技术栈的关键部分，以及使用 MongoDB 和 MongoDB Atlas Vector Search 来存储向量嵌入，通过结合这些技术，可以实现更智能、更强大的React应用；
- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) 一篇关于 CSS Grid 的互动指南。作者首先介绍了 CSS Grid 的基本概念，然后详细解释了如何使用 Grid 属性来创建复杂的布局。他通过一系列的互动示例，展示了如何使用这些属性来创建各种布局。最后介绍了一些高级的 Grid 特性，如 Grid 自动流、Grid 模板区域和 Grid 层叠顺序，这篇文章对于想要深入了解 CSS Grid 的开发者来说是一份很好的学习资源；
- [CSS Nesting](https://ishadeed.com/article/css-nesting/) 本文介绍 CSS 嵌套，该特性已经被所有主流浏览器所支持，作者解释了 CSS 嵌套的基本概念，即在一个 CSS 规则内部定义另一个 CSS 规则，并详细介绍了如何使用 CSS 嵌套，包括如何使用"&"符号来引用父选择器，如何使用嵌套来组织媒体查询，以及如何使用嵌套来创建 BEM 风格的 CSS。他还讨论了 CSS 嵌套的优点和缺点，并提醒读者在使用 CSS 嵌套时要注意避免过度嵌套，以保持代码的可读性和可维护性；
- [基于UI交互意图理解的异常检测方法](https://tech.meituan.com/2023/11/23/the-intent-of-ui-interaction-understanding.html) 美团到店平台技术部/质量工程部与复旦大学计算机科学技术学院周扬帆教授团队展开了“基于UI交互理解的智能化异常检测方法”的科研合作，利用多模态模型对用户可见文本、视觉图像内容和 UI 组件树中的属性进行融合，实现了对于 UI 交互意图的准确识别。该工作对于大前端 UI 的质量保障等多个领域都具有可借鉴的意义，介绍该工作的学术论文已经被 ESEC/FSE 2023 （软件领域CCF A类推荐会议）接收，并将于 12 月 6 日在其工业届轨（Industry track）公开发布和推介;
- [30 Bits of Advice for 30 Years](https://arne.me/articles/30-bits-of-advice-for-30-years) 作者 Arne 在自己 30 岁生日时分享了他的 30 条人生建议，这些建议涵盖了多个方面，包括职业发展、人际关系、健康生活等；在职业发展方面，他建议读者要勇于接受挑战，不断学习新知识，同时也要注重工作与生活的平衡；在人际关系方面，他强调了诚实、尊重和理解的重要性，同时也提醒读者要珍惜身边的人；在健康生活方面，他建议读者要注重身体健康，定期运动，保持良好的饮食习惯；最后，他鼓励读者要有自己的人生目标，勇于追求自己的梦想；
- [How I Improved My Rust Compile Times by 75%](https://benw.is/posts/how-i-improved-my-rust-compile-times-by-seventy-five-percent) Ben W. 分享了他如何通过优化代码结构，将 Rust 编译时间提高了 75% 的经验，这包括使用 Mold 链接器，Cranelift 编码器，和更高的优化等级，他发现使用 Mold 链接器和 Cranelift 代码生成器可以最大程度地提高编译速度，能使编译时间分别减少 75% 和 25%。此外，博主对 Rust 的热重载提出了替代方法，即 cargo-leptos 的 --hot-reload 标志，它可以在更改检测时通过 web socket 连接向浏览器发送 html 和 css 补丁，并在后台编译；
- [得物的微前端研发提效](https://mp.weixin.qq.com/s/so-mXAoPBhbO_yJMAi-qmg) 本文介绍了得物技术在推进效率前端微应用中，微前端研发效率所面临的挑战和解决方案。文章列举了微前端研发过程中的费力点，包括本地开发的服务启动、基座应用本地代码的适配性改造、频繁无规律刷新等，并介绍了技术调研中的 Shared 通信、Mock 父应用环境、Chrome 代理插件等解决方案。

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

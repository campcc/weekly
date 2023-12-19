import fs from 'fs';
import { posts } from './rss';

const latestPosts = posts
  .reverse()
  .map(
    (post) =>
      `- [Weekly ${post?.title}](https://campcc.github.io/weekly/docs/issue-${post.currentDocNum})`,
  ).join(`
`);

const readme = `
# FE News Weekly ❤️

English | [中文](README_ZH.md)

🚀 FE News Weekly, published every Monday at 11:00 AM.

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/logo.png" width="130" height="64" />

**Why create a weekly?**

In this era of information overload, front-end technology is rapidly evolving, with new knowledge, tools, and frameworks emerging daily. As developers, we need to continuously learn and progress to keep pace with the times. However, time is limited, and everyone is busy. It's not possible to keep up with all the news, information, and blogs every day. Through this weekly, I hope to help everyone save time and improve efficiency. I will filter the most cutting-edge and valuable front-end technology news for everyone, helping you quickly understand the technological trends of the week.

**Where does the newsletter content come from?**

The sources for technology news and quality articles include, but are not limited to: [Github Trending](https://github.com/trending), [Echo JS](https://www.echojs.com/), [JavaScript Weekly](https://javascriptweekly.com/), [CSS Weekly](https://css-weekly.com/), [W3C News & Blog](https://www.w3.org/news-events/), [MDH Weekly](https://mdhweekly.com/), [Tech Enthusiasts' Weekly](https://github.com/ruanyf/weekly), [Frontend Focus](https://frontendfoc.us/), and high-quality tech blogs from companies like Meituan, ByteDance, Tencent, Alibaba, as well as Meituan's internal quality newsletters, journals, and monthly magazines.

**Make a friend**

If you find the weekly helpful, feel free to make friends with me ❤️

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/wechat.png" width="200" height="300" />

#### How to Subscribe?

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [Juejin Column](https://juejin.cn/column/7304558952179023908)

## Past Posts
${latestPosts}
`;

const readmeZH = `# FE News Weekly ❤️

[English](README.md) | 中文

🚀 前端技术新闻周刊，每周一早上 11:00 发布。

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/logo.png" width="130" height="64" />

**为什么写周刊？**

在这个信息爆炸的时代，前端技术日新月异，每一天都有新的知识、新的工具、新的框架涌现。作为一名攻城狮，我们需要不断地学习和进步，才能跟上这个时代的步伐。
然而，时间是有限的，大家都很忙，我们不可能每天都去关注所有的新闻、资讯和博客，我希望通过这个周刊，帮助大家节省时间，提高效率。
我会为大家筛选出最前沿、最有价值的前端技术新闻，帮助大家快速了解一周的技术动态。

**周刊的内容输入从哪里来？**

技术新闻和优质文章的输入包括但不限于：[Github Trending](https://github.com/trending)、[Echo JS](https://www.echojs.com/)、[JavaScript Weekly](https://javascriptweekly.com/)、
[CSS Weekly](https://css-weekly.com/)、[W3C News & Bolg](https://www.w3.org/news-events/)、[MDH Weekly](https://mdhweekly.com/)、[科技爱好者周刊](https://github.com/ruanyf/weekly)、
[Frontend Focus](https://frontendfoc.us/)、美团、字节、腾讯、阿里等优质的技术博客以及美团内部优质的周刊、期刊和月刊等。

**Make a friend**

如果觉得周刊对你有帮助，可以交个朋友 ❤️

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/wechat.png" width="200" height="300" />

## 如何订阅？

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)

## 往期周刊
${latestPosts}`;

fs.writeFileSync('README_ZH.md', readmeZH, 'utf-8');
fs.writeFileSync('README.md', readme, 'utf-8');

import fs from 'fs';
import { posts } from './rss';

const latestPosts = posts
  .reverse()
  .map(
    (post) =>
      `- [Weekly ${post?.title}](https://campcc.github.io/weekly/docs/issue-${post.currentDocNum})`,
  ).join(`
`);

const readme = `# FE News Weekly ❤️

<link rel="icon" href="favicon.ico" type="image/x-icon" />

<img src="https://raw.githubusercontent.com/campcc/weekly/main/logo/logo.png" width="130" height="64" />

🚀 前端技术新闻周刊，每周一早上 10:00 发布。

**为什么写周刊？**

在这个信息爆炸的时代，前端技术日新月异，每一天都有新的知识、新的工具、新的框架涌现。作为一名前端攻城狮 🦁️，我们需要不断地学习和进步，才能跟上这个时代的步伐。
然而，时间是有限的，大家都很忙，我们不可能每天都去关注所有的新闻、资讯和博客，我希望通过这个周刊，帮助大家节省时间，提高效率。
我会为大家筛选出最前沿、最有价值的前端技术新闻，帮助大家快速了解一周的技术动态。

**周刊的内容输入从哪里来？**

技术新闻和优质文章的输入包括但不限于：

- [Github Trending](https://github.com/trending)
- [Echo JS](https://www.echojs.com/)
- [JavaScript Weekly](https://javascriptweekly.com/)
- [CSS Weekly](https://css-weekly.com/)
- [W3C News & Bolg](https://www.w3.org/news-events/)
- [MDH Weekly](https://mdhweekly.com/)
- [科技爱好者周刊](https://github.com/ruanyf/weekly)
- [前端食堂技术周刊](https://github.com/Geekhyt/weekly)
- 美团技术博客、内部优质的周刊、期刊和月刊等

## 如何订阅？

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)

## 往期周刊
${latestPosts}`;

fs.writeFileSync('README.md', readme, 'utf-8');

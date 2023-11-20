import fs from 'fs';
import { posts } from './rss';

const latestPosts = posts.map(
  (post) =>
    `- [Weekly ${post?.title}](https://campcc.github.io/weekly/docs/issue-${post.currentDocNum})`,
).join(`
`);

const readme = `# FE Weekly 前端周刊 ❤️

<img src="https://raw.githubusercontent.com/campcc/weekly/main/logo/logo.png" width="120" height="120" />

🚀 前端技术资讯周刊，每周一早上 9:00 更新。

<strong>为什么写周刊？</strong>

<strong>如何订阅？</strong>

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)

## 往期周刊
${latestPosts}`;

fs.writeFileSync('README.md', readme, 'utf-8');

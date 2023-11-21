import fs from 'fs';
import { posts } from './rss';

const latestPosts = posts
  .reverse()
  .map(
    (post) =>
      `- [Weekly ${post?.title}](https://campcc.github.io/weekly/docs/issue-${post.currentDocNum})`,
  ).join(`
`);

const readme = `# 前端技术新闻周刊 ❤️

<link rel="icon" href="favicon.ico" type="image/x-icon" />

<img src="https://raw.githubusercontent.com/campcc/weekly/main/logo/logo.png" width="260" height="128" />

🚀 前端技术新闻周刊，每周一早上 9:00 发布。

## 如何订阅？

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)

## 往期周刊
${latestPosts}`;

fs.writeFileSync('README.md', readme, 'utf-8');

import fs from 'fs';
import dayjs from 'dayjs';
import { getNextDocNum } from './utils';
import posts from './posts';

const latestPost = posts[posts.length - 1];
const nextDocNum = getNextDocNum();
const nextDocname = `docs/issue-${nextDocNum}.md`;
const titleImage = `https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-${nextDocNum}.png`;
const publishedAt = dayjs(latestPost?.publishedAt)
  .add(1, 'week')
  .format('YYYY/MM/DD');

const post = `---
title: 
titleImage: ${titleImage}
publishedAt: ${publishedAt}
---

<img src="https://raw.githubusercontent.com/campcc/weekly/main/images/weekly-${nextDocNum}.png" width="500" />

> 欢迎打开新的一期 FE News Weekly, 这是第 ${nextDocNum} 期, 发表于 ${publishedAt}, 下面为您带来本周最新的前端技术新闻 & 优质文章 ⚡️

## 技术新闻

## 优质文章

## 工具资源

## 欢迎订阅

- [Github](https://github.com/campcc/weekly)
- [RSS](https://campcc.github.io/weekly/public/rss.xml)
- [掘金专栏](https://juejin.cn/column/7304558952179023908)
`;

fs.writeFileSync(nextDocname, post, 'utf-8');

import fs from 'fs';
import dayjs from 'dayjs';
import { getNextDocNum } from './utils';

const publishedAt = dayjs().format('YYYY/MM/DD');
const nextDocNum = getNextDocNum();
const filename = `docs/issue-${nextDocNum}.md`;

const post = `---
title: 
titleImage: 
publishedAt: ${publishedAt}
---

> ❤️ 欢迎打开新的一期 FE News Weekly 周刊, 这是第 ${nextDocNum} 期, 发表于 ${publishedAt}, 下面为您带来本周最新的前端技术新闻 & 优质文章推荐。

## 技术新闻

## 优质文章

## 欢迎订阅
`;

fs.writeFileSync(filename, post, 'utf-8');

import fs from 'fs';
import path from 'path';
import { Feed } from 'feed';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import formatter from 'xml-formatter';

const md = new MarkdownIt();
const files = fs.readdirSync('docs');

export const posts = files.map((file) => {
  const markdown = fs.readFileSync(path.join('docs', file), 'utf8');
  const { data, content } = matter(markdown);
  const result = md.render(content);
  const currentDocNum = file.match(/issue-(\d+)\.md/)?.[1];
  const url = `https://campcc.github.io/weekly/docs/issue-${currentDocNum}`;
  return {
    currentDocNum,
    description: '',
    image: data?.titleImage,
    title: `第 ${currentDocNum} 期: ${data.title}`,
    date: dayjs(data?.publishedAt).toDate(),
    content: result,
    url,
  };
});

const author = {
  name: 'Monch Lee',
  email: 'monchlee51@gmail.com',
  link: 'https://github.com/campcc',
};

const feed = new Feed({
  title: 'FE News Weekly 前端周刊',
  description: 'FE News Weekly 前端技术新闻周刊',
  id: 'https://campcc.github.io/weekly',
  link: 'https://campcc.github.io/weekly',
  image: 'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png',
  copyright: 'All rights reserved 2023, Monch Lee',
  author,
});

posts.forEach((post) => {
  feed.addItem({
    title: post?.title,
    description: post?.description,
    content: post?.content,
    id: post.url,
    link: post.url,
    date: post.date,
    image: post.image,
  });
});

const xml = feed.atom1();

fs.writeFileSync('public/rss.xml', formatter(xml), 'utf-8');

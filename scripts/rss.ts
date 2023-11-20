import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import formatter from 'xml-formatter';

const md = new MarkdownIt();
const files = fs.readdirSync('docs');
export const posts = files.map((file) => {
  const markdown = fs.readFileSync(path.join('docs', file), 'utf8');
  const { data, content } = matter(markdown);
  const result = md.render(content);
  const url = '';
  const currentDocNum = file.match(/issue-(\d+)\.md/)?.[1]
  return {
    currentDocNum,
    title: `第 ${currentDocNum} 期：${data.title}`,
    image: data?.titleImage,
    date: new Date(data?.publishedAt),
    content: result,
    url,
  };
});

const author = {
  name: 'Monch Lee',
  email: 'monchlee51@gmail.com',
  link: 'https://github.com/campcc',
};

const feed = new RSS({
  title: 'FE Weekly 前端周刊',
  description: 'FE Weekly 前端周刊',
  feed_url: 'https://campcc.github.io/weekly/public/rss.xml',
  site_url: 'https://campcc.github.io/weekly',
  image_url: 'https://raw.githubusercontent.com/campcc/weekly/main/logo/logo.png',
  ttl: '60',
});

posts.forEach((post) => {
  feed.item({
    title: post?.title,
    description: post.content,
    url: post.url,
    author: author.name,
    date: post.date,
  });
});

const xml = feed.xml();

fs.writeFileSync('public/rss.xml', formatter(xml), 'utf-8');

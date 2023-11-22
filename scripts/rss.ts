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
  const currentDocNum = file.match(/issue-(\d+)\.md/)?.[1];
  return {
    currentDocNum,
    title: `第 ${currentDocNum} 期: ${data.title}`,
    date: data?.publishedAt,
    content: result,
    url: data?.url,
  };
});

const author = {
  name: 'Monch Lee',
  email: 'monchlee51@gmail.com',
  link: 'https://github.com/campcc',
};

const feed = new RSS({
  title: 'FE News Weekly 前端技术新闻周刊',
  description: 'FE News Weekly 前端技术新闻周刊',
  feed_url: 'https://campcc.github.io/weekly/public/rss.xml',
  site_url: 'https://campcc.github.io/weekly',
  image_url:
    'https://img.alicdn.com/imgextra/i2/O1CN013IYhe31M3AgB9FQll_!!6000000001378-0-tps-1920-1280.jpg_1200x1200.jpg',
  ttl: '60',
});

posts.forEach((post) => {
  feed.item({
    title: post?.title,
    description: post.content,
    url: post.url,
    author: author.name,
    date: post.date,
    custom_elements: [
      { 'itunes:author': 'John Doe' },
      { 'itunes:subtitle': 'A short primer on table spices' },
      {
        'itunes:image': {
          _attr: {
            href: 'https://img.alicdn.com/imgextra/i2/O1CN013IYhe31M3AgB9FQll_!!6000000001378-0-tps-1920-1280.jpg_1200x1200.jpg',
          },
        },
      },
      { 'itunes:duration': '7:04' },
    ],
  });
});

const xml = feed.xml();

fs.writeFileSync('public/rss.xml', formatter(xml), 'utf-8');

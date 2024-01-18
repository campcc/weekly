import fs from 'fs';
import { Feed } from 'feed';
import formatter from 'xml-formatter';
import posts from './posts';

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
  image: 'https://raw.githubusercontent.com/campcc/weekly/main/favicon.ico',
  favicon: 'https://raw.githubusercontent.com/campcc/weekly/main/favicon.ico',
  copyright: 'FE News Weekly since 2023',
  author,
});

posts
  .slice()
  .reverse()
  .slice(0, 5)
  .forEach((post) => {
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

const xml = feed.rss2();

fs.writeFileSync('public/rss.xml', formatter(xml), 'utf-8');

import fs from 'fs'
import path from 'path'
import RSS from 'rss'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import formatter from 'xml-formatter'

const md = new MarkdownIt();
const files = fs.readdirSync('docs');
const posts = files.map((file) => {
  const markdown = fs.readFileSync(path.join('docs', file), 'utf8');
  const { data, content } = matter(markdown);
  const result = md.render(content);
  const url = '';
  const currentNo = file.match(/issue-(\d+)\.md/)?.[1]
  return {
    title: `第 ${currentNo} 期：${data.title}`,
    image: data?.titleImage,
    date: new Date(data?.publishedAt),
    content: result,
    url,
  }
})

const author = {
  name: "Monch Lee",
  email: "monchlee51@gmail.com",
  link: "https://github.com/campcc"
}

const feed = new RSS({
  title: 'FE Weekly 前端周刊',
  description: 'FE Weekly 前端周刊',
  feed_url: 'https://campcc.github.io/weekly/public/rss.xml',
  site_url: 'https://campcc.github.io/weekly',
  image_url: 'http://example.com/icon.png',
  managingEditor: 'Editor',
  webMaster: 'Webmaster',
  language: 'en',
  pubDate: 'May 20, 2020 04:00:00 GMT',
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
})

const xml = feed.xml();

(async () => {
  fs.writeFileSync('public/rss.xml', formatter(xml), 'utf-8')
})()


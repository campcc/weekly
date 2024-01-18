import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const files = fs.readdirSync('docs');

const posts = files.map((file) => {
  const markdown = fs.readFileSync(path.join('docs', file), 'utf-8');
  const { data, content } = matter(markdown);
  const result = md.render(content).replace(/<p>&lt;img.*?&gt;<\/p>/g, '');
  const currentDocNum = file.match(/issue-(\d+)\.md/)?.[1];
  const url = `https://campcc.github.io/weekly/issue-${currentDocNum}`;
  return {
    currentDocNum,
    description: '',
    image: data?.titleImage,
    title: `第 ${currentDocNum} 期: ${data.title}`,
    date: dayjs(data?.publishedAt).toDate(),
    content: result,
    url,
    publishedAt: data?.publishedAt,
    markdown,
  };
});

export default posts;

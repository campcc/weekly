import fs from 'fs';
import path from 'path';

const firstDocNum = '001';

const incrementString = (str: string) => {
  let num = parseInt(str, 10) + 1;
  let numStr = num.toString();
  while (numStr.length < str.length) {
    numStr = '0' + numStr;
  }
  return numStr;
};

export const getLatestDocNum = () => {
  const cwd = process.cwd();
  const dir = path.join(cwd, 'docs');
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') && file.startsWith('issue-'))
    .sort((a, b) => {
      const aNum = parseInt(a.replace('issue-', '').replace('.md', ''));
      const bNum = parseInt(b.replace('issue-', '').replace('.md', ''));
      return bNum - aNum;
    });
  const latestDoc = files[0];
  const latestDocNum = latestDoc.match(/issue-(\d+)\.md/)?.[1];
  return latestDocNum || firstDocNum;
};

export const getNextDocNum = () => incrementString(getLatestDocNum());

import fs from 'fs';
import path from 'path';

export function getLatestDocNum() {
  const cwd = process.cwd();
  const dir = path.join(cwd, 'docs');
  const files = fs
    .readdirSync(dir)
    .filter((file) => {
      return (
        file.endsWith('.md') &&
        file.startsWith('issue-') &&
        !fs.readFileSync(path.join(dir, file), 'utf-8').includes('draft: true')
      );
    })
    .sort((a, b) => {
      const aNum = parseInt(a.replace('issue-', '').replace('.md', ''));
      const bNum = parseInt(b.replace('issue-', '').replace('.md', ''));
      return bNum - aNum;
    });
  const latestDoc = files[0];
  const latestDocNum = latestDoc.match(/issue-(\d+)\.md/)?.[1];
  return latestDocNum;
}

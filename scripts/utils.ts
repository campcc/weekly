import fs from 'fs';
import path from 'path';

export function getInfo() {
  const cwd = process.cwd();
  const dir = path.join(cwd, 'docs');
  const files = fs
    .readdirSync(dir)
    .filter((f) => {
      return (
        f.endsWith('.md') &&
        f.startsWith('issue-') &&
        !fs.readFileSync(path.join(dir, f), 'utf-8').includes('draft: true')
      );
    })
    .sort((a, b) => {
      const aNum = parseInt(a.replace('issue-', '').replace('.md', ''));
      const bNum = parseInt(b.replace('issue-', '').replace('.md', ''));
      return bNum - aNum;
    });
  const latestDoc = files[0];
  const latestDocNum = parseInt(
    latestDoc.replace('issue-', '').replace('.md', ''),
  );
  return {
    latestDocNum,
    nextDocNum: latestDocNum + 1,
  };
}

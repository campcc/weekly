import 'zx/globals';
import { getLatestDocNum } from './utils';

(async () => {
  const latestDocNum = getLatestDocNum();
  await $`npm run rss`;
  await $`git add ./`;
  await $`git commit -am 'feat: FE Weekly No.${latestDocNum}'`;
  await $`git push`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

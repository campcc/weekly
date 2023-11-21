import 'zx/globals';
import { getLatestDocNum } from './utils';

(async () => {
  const latestDocNum = getLatestDocNum();
  await $`npm run rss`;
  await $`npm run readme`;
  await $`git add ./`;
  await $`git commit -am 'No.${latestDocNum}'`;
  await $`git push`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

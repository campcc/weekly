import 'zx/globals';
import { getInfo } from './utils';

(async () => {
  const { latestDocNum, nextDocNum } = getInfo();
  await $`git commit -am '${latestDocNum}'`;
  await $`npm run rss`;
  await $`git add ./`;
  await $`git commit -am 'bootstrap ${nextDocNum}'`;
  await $`git push`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

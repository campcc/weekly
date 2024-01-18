import 'zx/globals';
import chalk from 'chalk';
import figlet from 'figlet';
import { getLatestDocNum } from './utils';

(async () => {
  const latestDocNum = getLatestDocNum();
  // 初始化
  console.log(
    '\n',
    chalk.green(
      figlet.textSync('FE News Weekly', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
    '\n',
  );
  await $`npm run rss`;
  await $`npm run readme`;
  await $`git add ./`;
  await $`git commit -am 'No.${latestDocNum}'`;
  await $`git push`;
  await $`npm run release-juejin`;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

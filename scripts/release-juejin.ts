import chalk from 'chalk';
import inquirer from 'inquirer';
import Service from './service';
import posts from './posts';

const publich = async () => {
  // 获取最新的一篇待发布的文章
  const latestPost = posts[posts.length - 1];

  // 从命令行获取掘金 cookie
  // @todo：自动登录掘金获取 cookie
  const { confirmed, cookie } = await inquirer.prompt([
    { name: 'confirmed', type: 'confirm', message: chalk.green('Need to publish to Juejin Column?') },
    { name: 'cookie', type: 'input', message: 'Please input the juejin cookie' },
  ]);

  if (confirmed) {
    // 获取草稿
    const service = new Service({ cookie });
    const drafts = await service.getDrafts();
    const postId = drafts?.[0]?.id;
    const postLink = `https://juejin.cn/post/${postId}`;
    // 更新草稿内容
    await service.updatePost({
      id: postId,
      title: `Weekly ${latestPost.title}`,
      image: latestPost.image,
      content: latestPost.markdown,
    });
    // 发布草稿到专栏
    await service.publishPost({
      draft_id: postId,
    });
    console.log(chalk.green(`\npublish success!\n\narticle link: ${chalk.yellowBright(postLink)}\n`));
  }
};

publich();

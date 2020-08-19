const axios = require('axios');
const simpleGit = require('simple-git');
const git = simpleGit();
// const { execSync } = require('child_process');
// const log = (msg) => console.log(`\n${msg}`);
// const run = (cmd, cwd) => execSync(cmd, { encoding: 'utf8', stdio: 'inherit', cwd });
// const rootDir = '.';

async function __() {
  const _ = await axios.get('http://whatthecommit.com/index.txt');

  await git.add('./*');
  await git.addConfig('user.name', 'Ephraim Atta-Duncan');
  await git.addConfig('user.email', 'ephraimduncan68@gmail.com');
  await git.commit(JSON.stringify(_.data.replace(/(\r\n|\n|\r)/gm, ''), ['--amend']));
  await git.push();
  // run('git init');
  // run('git add .');
  // run(`git config user.name ${JSON.stringify()}`, rootDir);
  // run(`git config user.email ${JSON.stringify()}`, rootDir);

  // log('Creating New Commit....');
  // run(`git commit --amend -m ${JSON.stringify(_.data.replace(/(\r\n|\n|\r)/gm, ''))}`, rootDir);

  // run(`git remote add origin https://github.com/${process.env.GITHUB_REPOSITORY}.git`);
  // log('Pushing New Commit....');
  // run(`git push -u origin ${process.env.GITHUB_REF.split('/')[2]}`, rootDir);
  // log('\nCommit message changed');

  // ${process.env.GITHUB_REPOSITORY.split('/')[1]}
}

try {
  __();
} catch (error) {
  throw new Error(error);
}

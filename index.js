const axios = require('axios');
const { execSync } = require('child_process');
const log = (msg) => console.log(`\n${msg}`);
const run = (cmd, cwd) => execSync(cmd, { encoding: 'utf8', stdio: 'inherit', cwd });
const rootDir = '.';

async function __() {
  const _ = await axios.get('http://whatthecommit.com/index.txt');
  log('Creating New Commit....');
  run(`git commit --amend -m ${JSON.stringify(_.data).replace(/(\r\n|\n|\r)/gm, '')}`, rootDir);

  log('Pushing New Commit....');
  run(`git push --force ${process.env.GITHUB_REPOSITORY.split('/')[1]} ${process.env.GITHUB_REF.split('/')[2]}`, rootDir);
}

try {
  __();
} catch (error) {
  throw new Error(error);
}

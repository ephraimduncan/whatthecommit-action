const core = require('@actions/core');
const axios = require('axios');
const { execSync } = require('child_process');
const log = (msg) => console.log(`\n${msg}`);
// const exit = (msg) => {
//   console.error(`\n${msg}`);
//   process.exit(1);
// };
const run = (cmd, cwd) =>
  execSync(cmd, { encoding: 'utf8', stdio: 'inherit', cwd });
const rootDir = '.';
// Get New Commit Message
// Edit Commit on everypush with The New Commit Message
// Push (force) the commit. ..If err, add git config

async function __() {
  const _ = await axios.get('http://whatthecommit.com/index.txt');
  log('Creating New Commit....');
  run(`git commit --amend -m ${_.data}`, rootDir);

  // log('Pushing New Commit....');
  // run(`git push --force`, rootDir);
}

try {
  __();
} catch (error) {
  core.setFailed(error.message);
}

const axios = require('axios');
const simpleGit = require('simple-git');
const git = simpleGit();

async function __() {
  const _ = await axios.get('http://whatthecommit.com/index.txt');
  await git.add('./*');
  await git.addConfig('user.name', process.env.GITHUB_ACTOR);
  await git.addConfig('user.email', process.env.COMMIT_EMAIl);
  await git.commit(_.data.replace(/(\r\n|\n|\r)/gm, ''), ['--amend']);
  await git.pull(['--allow-unrelated-histories']);
  await git.push();
}

try {
  __();
} catch (error) {
  throw new Error(error);
}

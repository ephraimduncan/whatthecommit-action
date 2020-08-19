const _ = require('axios');
const __ = require('simple-git');
const ___ = __();

async function ____() {
  const _____ = await _.get('http://whatthecommit.com/index.txt');

  await ___.add('./*');
  await ___.addConfig('user.name', process.env.GITHUB_ACTOR);
  await ___.addConfig('user.email', process.env.COMMIT_EMAIl);
  await ___.commit(_____.data.replace(/(\r\n|\n|\r)/gm, ''), ['--amend']);
  await ___.pull(['--allow-unrelated-histories']);
  await ___.push();
}

try {
  ____();
} catch (error) {
  throw new Error(error);
}

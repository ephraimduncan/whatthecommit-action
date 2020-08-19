const _ = require('axios');
const __ = require('simple-git');
const ___ = __();

async function ____() {
  const _____ = await _.get('http://whatthecommit.com/index.txt');
  const ______ = await _.get(`https://api.github.com/users/${process.env.GITHUB_ACTOR}/events`);

  await ___.add('./*');
  await ___.addConfig('user.name', process.env.GITHUB_ACTOR);
  await ___.addConfig('user.email', ______.data[0].payload.commits[0].author.email);
  await ___.commit(_____.data.replace(/(\r\n|\n|\r)/gm, ''), ['--amend']);
  await ___.pull(['--allow-unrelated-histories']);
  await ___.push();
}

try {
  ____();
} catch (error) {
  throw new Error(error);
}

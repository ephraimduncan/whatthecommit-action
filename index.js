const _ = require('axios');
const __ = require('simple-git');
const ___ = __();

async function ____() {
  const _____ = await _.get('http://whatthecommit.com/index.txt');
  const ______ = await _.get(`https://api.github.com/users/${process.env.GITHUB_ACTOR}/events`);
  let _______;
  let ________;
  await ______.data.forEach((data) => {
    if (data.type === 'PushEvent') {
      _______ = data.payload.commits[0].author.email;
    } else {
      ________ = 'github-actions[bot]';
      _______ = '41898282+github-actions[bot]@users.noreply.github.com';
    }
  });

  let _________ = ________ ? ________ : process.env.GITHUB_ACTOR;
  await ___.addConfig('user.name', _________);
  await ___.addConfig('user.email', _______.data[0].payload.commits[0].author.email);
  await ___.commit(_____.data.replace(/(\r\n|\n|\r)/gm, ''), ['--amend']);
  await ___.pull(['--allow-unrelated-histories']);
  await ___.push();
}

try {
  ____();
} catch (error) {
  throw new Error(error);
}

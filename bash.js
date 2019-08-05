const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  const firstCmd = cmd[0];
  const secondCmd = cmd[1];

  if (firstCmd === 'pwd') {
    pwd(done);
  } else if (firstCmd === 'ls') {
    ls(done);
  } else if (firstCmd === 'cat') {
    cat(secondCmd, done);
  } else if (firstCmd === 'curl') {
    curl(secondCmd, done);
  }
});

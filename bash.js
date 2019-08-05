const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  const firstCmd = cmd[0];
  const secondCmd = cmd[1];

  // process.stdout.write('You typed: ' + cmd);

  if (firstCmd === 'pwd') {
    pwd();
  } else if (firstCmd === 'ls') {
    ls();
  } else if (firstCmd === 'cat') {
    cat(secondCmd);
  }
});

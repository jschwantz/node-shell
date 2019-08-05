const fs = require('fs');

const cat = (secondCmd, done) => {
  fs.readFile(secondCmd, 'utf8', (err, data) => {
    if (err) throw err;
    done(data);
  })
}

module.exports = cat;

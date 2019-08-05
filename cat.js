const fs = require('fs');

const cat = (secondCmd) => {
  fs.readFile(secondCmd, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
}

module.exports = cat;

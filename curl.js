const request = require('request');

const curl = function (site, done) {
  request(site, (error, response, body) => {
    if (error) {
      throw error;
    }
    done(body);
  })
}

module.exports = curl;

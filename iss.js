const request = require('request');

const fetchMyIP = function(callback) {
  // Use ipify.org to get your external IP address in JSON format
  request('https://api64.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(new Error(`Unexpected status code: ${response.statusCode}`), null);
      return;
    }

    try {
      const data = JSON.parse(body);
      const ip = data.ip;
      callback(null, ip);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
};

module.exports = { fetchMyIP };
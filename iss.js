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
      callback(new Error(`Error parsing IP: ${parseError}`), null);
    }
  }
  );
};


const fetchCoordsFromIP = function(ip, callback) {

  request('http://ipwho.is/', (error, response, body) => {
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
      const coordinates = {
        latitude: null,
        longitude: null,
      };

      if (data.latitude !== undefined && data.latitude !== null) {
        coordinates.latitude = Number(data.latitude);
      }

      if (data.longitude !== undefined && data.longitude !== null) {
        coordinates.longitude = Number(data.longitude);
      }

      callback(null, coordinates);
    } catch (parseError) {
      callback(new Error(`Error parsing coordinates: ${parseError}`), null);
    }
  });
};


fetchCoordsFromIP("99.211.158.105", (error, coordinates) => {
  if (error) {
    console.error(`Error fetching coordinates: ${error.message}`);
  } else {
    console.log(`Coordinates for IP ${"99.211.158.105"}: ${coordinates.latitude}, ${coordinates.longitude}`);
  }
});

module.exports = {
  fetchMyIP,
  fetchCoordsFromIP

};
const { fetchMyIP, fetchCoordsFromIP, fetchISSFlyoverData } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsFromIP("99.211.158.105", (error, coordinates) => {
  if (error) {
    console.error(`Error fetching coordinates: ${error.message}`);
  } else {
    console.log(`Coordinates for IP ${"99.211.158.105"}: ${coordinates.latitude}, ${coordinates.longitude}`);
  }
});

fetchISSFlyoverData(yourCoordinates, (error, data) => {
  if (error) {
    console.error(`Error fetching ISS flyover data: ${error.message}`);
  } else {
    console.log('ISS Flyover Data:', data);
  }
});


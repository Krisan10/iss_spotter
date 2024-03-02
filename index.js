// const { fetchMyIP, fetchCoordsFromIP, fetchISSFlyoverData } = require('./iss');


const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsFromIP(ipAddress, (error, coordinates) => {
//   if (error) {
//     console.error(`Error fetching coordinates: ${error.message}`);
//   } else {
//     console.log(`Coordinates for IP ${ipAddress}: ${coordinates.latitude}, ${coordinates.longitude}`);
//   }
// });

// fetchISSFlyoverData(yourCoordinates, (error, data) => {
//   if (error) {
//     console.error(`Error fetching ISS flyover data: ${error.message}`);
//   } else {
//     console.log('ISS Flyover Data:', data);
//   }
// });


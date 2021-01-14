//make an http request to the api
//create a server that will serve the info to the browser

const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=95a2d2ec482edde071de8f7f6d3a049a";

  request({ url, json: true }, (error, res) => {
    if (error) {
      callback(
        "Unable to reach geocode api, check internet connection",
        undefined
      );
    } else if (res.body.message) {
      callback(res.body.message, undefined);
    } else {
      callback(undefined, {
        location: res.body.name,
        weather_description: res.body.weather[0].description,
        temperature: res.body.main.temp,
      });
    }
  });
};

module.exports = forecast;

const CITIES = require('../static/cities');

module.exports = (city) => {
  return {id:CITIES.length, name: city, minTemp: 10, maxTemp:28, weatherWord: "couvert", weatherPicto:"https://publicdomainvectors.org/photos/spite_thunder.png"}
}

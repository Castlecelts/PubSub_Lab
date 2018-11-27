const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function() {
  this.planets = null;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:all-planets-ready', (event) => {
    this.planets = event.detail;
  });

  PubSub.subscribe('NavView:selected-planet-id', (event) => {
    const selectedName = event.detail;
    this.publishPlanetDetails(selectedName);
    // call Select function
    // publish result of Select function
  });
};

SolarSystem.prototype.publishPlanetDetails = function (selectedName) {
  for (const planet of this.planets){
    if (planet.name === selectedName){
      PubSub.publish('SolarSystem:selected-planet-details', planet);
    };
  }
  };

  module.exports = SolarSystem;

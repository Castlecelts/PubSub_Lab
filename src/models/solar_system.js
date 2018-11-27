const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:all-planets-ready', (event) => {
    const allPlanetsInfo = event.detail;
  });
  PubSub.subscribe('NavView:selected-planet-id', (event) => {
    const selectedName = event.detail;
    this.publishPlanetDetails(selectedName);
    // call Select function
    // publish result of Select function
  });
};

SolarSystem.prototype.publishPlanetDetails = function (selectedName) {
  const planetsArray = this.planets;
  for
};

module.exports = SolarSystem;

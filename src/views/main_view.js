const PubSub = require('../helpers/pub_sub.js')

const MainView = function (element) {
  this.element = element;
};

MainView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-details', (event) => {
    const selectedPlanet = event.detail;
    this.render(selectedPlanet);
  })
};

MainView.prototype.render = function (planet) {
  const infoDiv = document.createElement('div');
  console.log(infoDiv);
  infoDiv.textContent = `Planet Name: ${planet.name}, Orbit: ${planet.orbit}, Day: ${planet.day}, Surface Area: ${planet.surfaceArea}, Volume: ${planet.volume}, Gravity: ${planet.gravity}, Moons: ${planet.moons}`;
  this.element.innerHTML = '';
  this.element.appendChild(infoDiv);

  // for (element of  planet){
  //   const listItem = document.createElement('li');
  //   listItem.textContent = `${element.value} : ${element.key}`
  //   this.element.appendChild(listItem);
  // };
  
};

module.exports = MainView;

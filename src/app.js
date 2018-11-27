const Planets = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);

  const planets = new Planets();
  planets.bindEvents();
  console.log(planets);

  const selectElement = document.querySelector('.planets-menu');
  const navview = new NavView(selectElement);
  console.log(selectElement);
  navview.bindEvents();
});

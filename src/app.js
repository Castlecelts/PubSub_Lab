const Planets = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');
const MainView = require('./views/main_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
  const solarSystem = new SolarSystem();
  solarSystem.bindEvents();

  const planets = new Planets();
  planets.bindEvents();

  const selectElement = document.querySelector('.planets-menu');
  const navview = new NavView(selectElement);
  navview.bindEvents();

  const infoDiv = document.querySelector('.planet-details');
  const mainview = new MainView(infoDiv);
  mainview.bindEvents();
});

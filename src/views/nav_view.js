const PubSub = require('../helpers/pub_sub.js')

const NavView = function(element){
    this.element = element;
};

NavView.prototype.bindEvents = function () {
    this.element.addEventListener('click', (event) => {
      console.log(event);
      const selectedIndex = event.target.id;
      PubSub.publish('NavView:selected-planet-id', selectedIndex);
      console.log(selectedIndex);
    });
};

module.exports = NavView;

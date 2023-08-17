const Vehichle = require('./Vehicle.js');

module.exports = class Car extends Vehichle {
  constructor(make, model, color, trim, s) {
    super(make, model, color);
    this.trim = trim;
    this.speed = s;
  }
};

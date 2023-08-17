const Vehichle = require('./Vehicle.js');

module.exports = class Truck extends Vehichle {
  /**
   *
   * @param {string} make
   * @param {string} model
   * @param {string} color
   * @param {string} trim
   * @param {integer} payload
   * @param {integer} bedLength
   * @param {integer} towCapacity
   */
  constructor(make, model, color, trim, payload, bedLength, towCapacity) {
    super(make, model, color);
    this.trim = trim;
    this.payload = payload;
    this.bedLength = bedLength;
    this.towCapacity = towCapacity;
  }
  addPayload(amount) {
    this.payload = this.payload + amount;
  }
};

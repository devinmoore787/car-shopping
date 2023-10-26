const CarsDAO = require('./CarsDAO');
const ColorsDAO = require('./ColorsDAO');
const MakesDAO = require('./MakesDAO');

const carsDAO = new CarsDAO();
const colorsDAO = new ColorsDAO();
const makesDAO = new MakesDAO();

module.exports = {
  getCarsHandler: function (req, res) {
    carsDAO
      .selectCars()
      .then((data) => {
        console.log('DATA:', data);
        res.json(data);
      })
      .catch((error) => {
        res.json([]);
      });
  },

  createCarHandler: function (req, res) {
    carsDAO
      .insertCar(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  },

  getMakesHandler: function (req, res) {
    makesDAO
      .selectMakes()
      .then((data) => {
        console.log('DATA:', data);
        res.json(data);
      })
      .catch((error) => {
        res.json([]);
      });
  },

  getColorsHandler: function (req, res) {
    colorsDAO
      .selectColors()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json([]);
      });
  },
};

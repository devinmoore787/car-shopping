const express = require('express');
const {
  getCarsHandler,
  createCarHandler,
  getMakesHandler,
} = require('./handlers');
const router = express.Router();

router.get('/api/cars', getCarsHandler);

router.post('/api/cars', createCarHandler);

router.get('/api/makes', getMakesHandler);

module.exports = router;

const express = require('express');
const handler = require('./handlers');
const router = express.Router();

router.get('/api/cars', handler.getCarsHandler);

router.post('/api/cars', handler.createCarHandler);

router.get('/api/makes', handler.getMakesHandler);

router.get('/api/colors', handler.getColorsHandler);

module.exports = router;

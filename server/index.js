const express = require('express');
const app = express();
const port = 8000;

const pgp = require('pg-promise')();
const db = pgp('postgres://postgres@127.0.0.1:5432/postgres');

app.use(express.json());

app.get('/api/cars', (req, res) => {
  db.many(
    `SELECT DISTINCT on(cars.id) cars.id,
          cars.name,
          cars.year,
          models.name model,
          makes.name make,
          trims.name TRIM,
          colors.name color,
          ARRAY_AGG(options.name) OPTION
        FROM public.cars
      JOIN public.models ON models.id = cars.model_id
      JOIN public.makes ON makes.id = models.make_id
      JOIN public.trims ON trims.id = cars.trim_id
      JOIN public.colors ON colors.id = cars.color_id
      LEFT JOIN public.car_option co ON co.car_id = cars.id
      LEFT JOIN public.options ON options.id = co.option_id
       GROUP BY 1, 2, 3, 4, 5, 6, 7
  `
  ).then((data) => {
    console.log('DATA:', data);
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

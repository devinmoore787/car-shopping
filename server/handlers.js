const pgp = require('pg-promise')();
const db = pgp('postgres://postgres@127.0.0.1:5432/postgres');

module.exports = {
  getCarsHandler: function (req, res) {
    db.many(
      ` SELECT DISTINCT on(cars.id) cars.id,
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
    )
      .then((data) => {
        console.log('DATA:', data);
        res.json(data);
      })
      .catch((error) => {
        res.json([]);
      });
  },

  createCarHandler: function (req, res) {
    db.one(
      `
        insert into public.cars (
            name,
            year,
            model_id,
            trim_id,
            color_id,
            created_at,
            updated_at
        ) values (
            $<name>,
            $<year>,
            $<model_id>,
            $<trim_id>,
            $<color_id>,
            now(),
            now()
        ) returning * `,
      req.body
    )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  },
  getMakesHandler: function (req, res) {
    db.many(
      ` 
         SELECT id,
                name
         FROM public.makes
         ORDER BY name ASC`
    )
      .then((data) => {
        console.log('DATA:', data);
        res.json(data);
      })
      .catch((error) => {
        res.json([]);
      });
  },
};

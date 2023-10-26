const DAO = require('./Dao');

class CarsDAO extends DAO {
  selectCars() {
    return this.db.many(
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
    );
  }

  /**
   * Insert car into db
   * @param {Obejct} car
   * @returns {Promise<any>}
   */
  insetCar(car) {
    return this.db.one(
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
          ) returning * 
          `,
      car
    );
  }
}

module.exports = CarsDAO;

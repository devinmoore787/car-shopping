-- Verify car-shopping:initschema on pg

BEGIN;

SELECT
  id,
  name,
  created_at,
  updated_at FROM makes WHERE FALSE;


SELECT
  id,
  name,
  make_id,
  created_at,
  updated_at FROM models WHERE FALSE;


SELECT
  id,
  name,
  created_at,
  updated_at FROM trims WHERE FALSE;


SELECT
  id,
  name,
  created_at,
  updated_at FROM colors WHERE FALSE;


SELECT
  id,
  name,
  year,
  model_id,
  trim_id,
  color_id,
  created_at,
  updated_at FROM cars WHERE FALSE;
 
SELECT
  id,
  name,
  created_at,
  updated_at FROM options WHERE FALSE;


SELECT
  id,
  car_id,
  option_id FROM car_option WHERE FALSE;


ROLLBACK;

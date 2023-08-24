-- Deploy car-shopping:initschema to pg

BEGIN;

CREATE TABLE "options" (
  "id" integer,
  "name" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "makes" (
  "id" integer,
  "name" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "models" (
  "id" integer,
  "name" varchar,
  "make_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_models.make_id"
    FOREIGN KEY ("make_id")
      REFERENCES "makes"("id")
);

CREATE TABLE "colors" (
  "id" integer,
  "name" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "trims" (
  "id" integer,
  "name" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "cars" (
  "id" integer,
  "name" varchar,
  "year" date,
  "model_id" integer,
  "trim_id" integer,
  "color_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_cars.model_id"
    FOREIGN KEY ("model_id")
      REFERENCES "models"("id"),
  CONSTRAINT "FK_cars.color_id"
    FOREIGN KEY ("color_id")
      REFERENCES "colors"("id"),
  CONSTRAINT "FK_cars.trim_id"
    FOREIGN KEY ("trim_id")
      REFERENCES "trims"("id")
);

CREATE TABLE "car_option" (
  "id" integer,
  "car_id" integer,
  "option_id" integer,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_car_option.option_id"
    FOREIGN KEY ("option_id")
      REFERENCES "options"("id"),
  CONSTRAINT "FK_car_option.car_id"
    FOREIGN KEY ("car_id")
      REFERENCES "cars"("id")
);



COMMIT;

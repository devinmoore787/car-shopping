-- Revert car-shopping:initschema from pg

BEGIN;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

COMMIT;

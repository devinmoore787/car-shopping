const pgp = require('pg-promise')();
const db = pgp('postgres://postgres@127.0.0.1:5432/postgres');

module.exports = db;

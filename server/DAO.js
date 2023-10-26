const db = require('./db');

class DAO {
  constructor() {
    this.db = db;
  }
}

module.exports = DAO;

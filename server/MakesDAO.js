const DAO = require('./Dao');

class MakesDAO extends DAO {
  /**
   * Get Makes from database
   * @returns {Promise<any>}
   */
  selectMakes() {
    return this.db.many(
      ` 
           SELECT id,
                  name
           FROM public.makes
           ORDER BY name ASC`
    );
  }
}

module.exports = MakesDAO;

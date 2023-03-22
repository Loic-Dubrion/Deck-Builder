/* ========================================= 
*  DATA MAPPER
=========================================== */

// Import des modules
const client = require('./database');


/* ========================================= 
*  REQUETES SQL
=========================================== */

const dataMapper = {

  getAllCards : () => {
    const promiseData = client.query('SELECT * FROM card');
    return promiseData;
  },

  getCard : (id) => {
    const promiseData = client.query('SELECT * FROM card WHERE id=$1', [id]);
    return promiseData;
  },

  searchElem : (elem) => {
    const promiseData = client.query('SELECT * FROM card WHERE element=$1', [elem]);
    return promiseData;
  },

  searchLevel : (level) => {
    const promiseData = client.query('SELECT * FROM card WHERE level=$1', [level]);
    return promiseData;
  },

  searchDirection : (direction, valeur) => {
    console.log(direction, valeur);
    const promiseData = client.query(`SELECT * FROM card WHERE ${direction}>=${valeur}`);
    return promiseData;
  },

  searchName : (nameCard) => {
    const promiseData = client.query('SELECT * FROM card WHERE name ILIKE $1', [nameCard]);
    return promiseData;
  },

  getDeck : (deck) => {
    const promiseData = client.query('SELECT * FROM card WHERE id=$1', [deck]);
    return promiseData;
  },

};

/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = dataMapper;

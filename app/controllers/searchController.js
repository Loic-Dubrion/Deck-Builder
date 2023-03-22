/* ========================================= 
*  IMPORT DES MODULES
=========================================== */

const { name } = require('ejs');
const dataMapper = require('../services/dataMapper.js');


/* ========================================= 
*  CONTROLLER SEARCHCONTROLLER
=========================================== */


const searchController = {

  searchPage: (req, res) => {
    res.render('search');
  },

  searchElem: async (req, res) => {
    if (req.query.element) {
      try {
        elem = req.query.element;
        const result = await dataMapper.searchElem(elem);
        res.render('results', { result: result.rows, title: 'Liste des cartes' });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    }

    if (req.query.level) {
      try {
        level = req.query.level;
        const result = await dataMapper.searchLevel(level);
        res.render('results', { result: result.rows, title: 'Liste des cartes' });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    }

    if (req.query.direction) {
      try {
        direction = 'value_'+req.query.direction.toLowerCase();
        valeur = req.query.value;
        console.log(direction, valeur);
        const result = await dataMapper.searchDirection(direction, valeur);
        console.log(result.rows);
        res.render('results', { result: result.rows, title: 'Liste des cartes' });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    }

    if (req.query.name) {
      try {
        console.log('ok');
        nameCard = req.query.name;
        console.log(nameCard);
        const result = await dataMapper.searchName(nameCard);
        console.log(result.rows);
        res.render('results', { result: result.rows, title: 'Liste des cartes' });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    }

  },

};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = searchController;
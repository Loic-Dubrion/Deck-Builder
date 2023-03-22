/* ========================================= 
*  POINT D'ENTREE ROUTER
=========================================== */

// Importations des modules
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const searchController = require('../controllers/searchController');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);
router.get('/card/:id', mainController.detailCard);
router.get('/search/:search', searchController.searchElem);
router.get('/deck', mainController.deckPage);
router.get('/addDeck/:id', mainController.addDeck);
router.get('/deck/remove/:id', mainController.removeDeck);


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = router;
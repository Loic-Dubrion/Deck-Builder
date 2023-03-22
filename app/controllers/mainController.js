/* ========================================= 
*  IMPORT DES MODULES
=========================================== */
const dataMapper = require('../services/dataMapper.js');
const session = require('express-session');

// Création de ma session deck
let deck = [];
session.deck = deck;


/* ========================================= 
*  CONTROLLER MAINCONTROLLER
=========================================== */

const mainController = {

  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', { cards : cards.rows, title: 'Liste des cartes' });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  detailCard: async (req, res) => {
    try {
      const card = await dataMapper.getCard(req.params.id);
      console.log(card.rows[0]);
      res.render('cardDetail', {card: card.rows[0]});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  deckPage: (req, res) => {
    if (!req.session.deck) {
      res.send('votre deck est vide');
    } 
    deck = req.session.deck;
    console.log('ok', deck);
    let cards = req.session.deck;
    res.render('deck', {cards});

  },

  addDeck: async (req, res) => {
    const id = Number(req.params.id);

    try {
      const result = await dataMapper.getCard(id);    
      if (deck.length >= 5) {                         // Je bloque à 5 cartes
        res.send('votre deck est complet');
      } else if (deck.some(card => card.id === id)) {
        res.send('Vous avez déjà ajouté cette carte.');
      } else {
        deck.push(result.rows[0]);                    // J'ajoute à ma session
        req.session.deck = deck;
        res.redirect('/deck');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  }, 

  removeDeck: async (req, res) => {
    const id = Number(req.params.id);
    const cookies = req.session.deck;                         // Je récupère ma session
    const newDeck = cookies.find(deck => deck.id === id);     // Je trouve la premère correspondance dans ma session
    if (newDeck !== -1) {
      cookies.splice(newDeck, 1);                             // Je supprime
    }
    res.redirect('/deck');
  },

};

/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = mainController;

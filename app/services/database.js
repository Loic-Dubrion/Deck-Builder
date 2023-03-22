/*==============================
======== ACCES A LA BDD ========
==============================*/

// Importation de la classe Client depuis le module pg
const { Client } = require('pg');

// Création d'une instance de la classe Client via les données du fichier .env
const client = new Client();

// Connexion et vérification de la base de données
client.connect(() => {
  console.log('Connexion à la BDD réussie');  
});

// Export du module
module.exports = client;

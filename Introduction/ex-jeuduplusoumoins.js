/*
Exercice Langage

Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
Demander et récupérer la saisie, afficher si le nombre est plus grand, plus petit ou trouvé (API Readline sur Node.js)
Pouvoir trouver en plusieurs tentative (problème d'asynchronisme)
Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Génère un nombre entier aléatoire
 * @param {number} min - La borne minimum
 * @param {number} max - La borne maximum (inclue)
 * @returns {number} - Le nombre aléatoire
 */
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

var jouer = function() {
  if (essais.length) {
    console.log('Tu as déjà joué : ', essais.join(', '));
  }

  rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {
    const entierSaisi = Number.parseInt(answer);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : Il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
};

jouer();

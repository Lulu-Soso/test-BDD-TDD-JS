// Définition de la fonction BowlingGame
function BowlingGame() {
    // Initialisation des variables
    let rolls = [];
    let currentRoll = 0;
  
    // Fonction pour enregistrer le nombre de quilles tombées
    function roll(pins) {
      rolls[currentRoll++] = pins;
    }
  
    // Fonction pour calculer la somme des quilles tombées pour un frame donné
    function sumOfBallsInFrame(frameIndex) {
      return rolls[frameIndex] + rolls[frameIndex + 1];
    }
  
    // Fonction pour calculer le score total de la partie
    function score() {
      let score = 0;
      let frameIndex = 0;
  
      // Boucle pour parcourir les 10 frames de la partie
      for (let frame = 0; frame < 10; frame++) {
        score += sumOfBallsInFrame(frameIndex); // Ajout de la somme des quilles tombées pour le frame courant
        frameIndex += 2; // Incrément de l'index pour passer au frame suivant
      }
  
      return score; // Retourne le score total de la partie
    }
  
    // Retourne un objet contenant les fonctions roll et score
    return {
      roll,
      score,
    };
  }

  module.exports = BowlingGame;
const BowlingGame = require("../assets/js/bowling-game");

// Définit une suite de tests pour le jeu de bowling
describe("BowlingGame", () => {
    let game;
  
    // Avant chaque test, instancie un nouveau jeu de bowling
    beforeEach(() => {
      game = new BowlingGame();
    });
  
    // Définit une fonction qui permet de faire plusieurs lancers avec le même nombre de quilles renversées
    const rollMany = (n, pins) => {
      for (let i = 0; i < n; i++) {
        game.roll(pins);
      }
    };
  
  // Teste si le jeu de bowling gère correctement une partie "sans marquer de points" ou "gutter game" en anglais.
  it("should handle a gutter game", () => {
      // Appelle la fonction "rollMany" avec les arguments "20" et "0", pour rouler 20 boules qui ne marquent aucun point.
      rollMany(20, 0);
      // Utilise la fonction "expect" avec la méthode "toEqual" pour comparer le résultat renvoyé par la fonction "score" du jeu de bowling avec la valeur "0", qui correspond au score attendu pour une partie sans marquer de points.
      expect(game.score()).toEqual(0);
    });
    
  
  //   test("should properly calculate a strike", () => {
  //       // test
  //   });
  
    // it("should properly calculate a spare", () => {
    //     // test
    // });
  });
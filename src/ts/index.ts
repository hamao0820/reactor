import "../style.css";
import Game from "./game";

class Main {
  constructor() {
    const game = new Game();
    game.start();
  }
}

new Main();

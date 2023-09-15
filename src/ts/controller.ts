import GameObject from "./character";
import Counter from "./counter";
import Field from "./field";
import Hero from "./hero";

class Controller {
  static #originalHeroX = 0;
  static #originalPageX = -1;
  static init(hero: Hero, counter: Counter) {
    document.onpointerdown = (e: MouseEvent) => {
      this.#originalHeroX = hero.x;
      this.#originalPageX = e.pageX;
    };
    document.onpointermove = (e: MouseEvent) => {
      if (this.#originalPageX === -1) {
        return;
      }
      const diff = e.pageX - this.#originalPageX;
      const newX = Math.max(
        Math.min(
          this.#originalHeroX + diff,
          Field.height - GameObject.size / 2
        ),
        GameObject.size / 2
      );
      hero.setPosition(newX, hero.y);
      counter.setPosition(newX, hero.y - GameObject.size);
    };

    document.onpointerup = (e: MouseEvent) => {
      this.#originalPageX = -1;
    };
  }
}

export default Controller;

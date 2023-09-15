import GameObject from "./character";
import EnemyObject from "./enemyObject";
import Field from "./field";

class Bullet extends EnemyObject {
  #dx: number = 0;
  #dy: number = 0;
  #removed: boolean = false;
  readonly #speed = 5;
  constructor() {
    super("");
  }

  setDelta(dx: number, dy: number) {
    this.#dx = dx;
    this.#dy = dy;
    if (dx === 1) {
      this.element.textContent = "→";
    } else if (dx === -1) {
      this.element.textContent = "←";
    } else if (dy === 1) {
      this.element.textContent = "↓";
    } else if (dy === -1) {
      this.element.textContent = "↑";
    }
  }

  remove() {
    this.#removed = true;
    this.element.remove();
  }

  move() {
    this.setPosition(
      this.x + this.#dx * this.#speed,
      this.y + this.#dy * this.#speed
    );
  }

  reflectX() {
    this.setDelta(-this.#dx, this.#dy);
  }

  reflectY() {
    this.setDelta(this.#dx, -this.#dy);
  }

  get removed() {
    return this.#removed;
  }

  get dy() {
    return this.#dy;
  }

  get dx() {
    return this.#dx;
  }
}

export default Bullet;

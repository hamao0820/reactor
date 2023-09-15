import GameObject from "./character";

abstract class EnemyObject extends GameObject {
  #removed: boolean = false;
  #timer: number = 10;
  constructor(text: string = "") {
    super(text);
  }

  remove() {
    this.#removed = true;
    this.element.remove();
  }

  tick() {
    if (this.#timer > 0) this.#timer--;
  }

  get isInvincible() {
    return this.#timer > 0;
  }

  get removed() {
    return this.#removed;
  }

}

export default EnemyObject;

import Bullet from "./bullet";
import GameObject from "./character";
import Reactor from "./reactor";

class Field {
  static readonly #width = 300;
  static readonly #height = 300;
  static #bulletList: Bullet[] = [];
  static #reactorList: Reactor[] = [];
  static #container: HTMLDivElement;

  static init() {
    this.#bulletList = [];
    this.#reactorList = [];
    this.#container = document.getElementById("container") as HTMLDivElement;
  }

  static append(obj: GameObject) {
    this.#container.append(obj.element);
  }

  static get width() {
    return this.#width;
  }

  static get height() {
    return this.#height;
  }
}

export default Field;

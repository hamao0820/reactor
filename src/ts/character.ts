abstract class GameObject {
  static readonly size = 30;
  readonly #element: HTMLDivElement;
  #x: number = 0;
  #y: number = 0;
  constructor(text: string = "") {
    const element = document.createElement("div");
    this.#element = element;
    this.#element.style.position = "absolute";
    this.#element.style.width = `${GameObject.size}px`;
    this.#element.style.height = `${GameObject.size}px`;
    this.#element.style.display = "flex";
    this.#element.style.alignItems = "center";
    this.#element.style.justifyContent = "center";
    this.#element.style.fontSize = `${GameObject.size * 0.9}px`;
    this.#element.style.color = "#fff";
    this.#element.textContent = text;
  }
  setPosition(x: number, y: number) {
    this.#x = x;
    this.#y = y;
    this.#element.style.left = `${x - GameObject.size / 2}px`;
    this.#element.style.top = `${y - GameObject.size / 2}px`;
  }

  get element() {
    return this.#element;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  set text(text: string) {
    this.#element.textContent = text;
  }
}

export default GameObject;

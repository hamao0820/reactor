class Score {
  static #score = 0;
  static #element :HTMLDivElement;

  static init() {
    this.#score = 0;
    this.#element = document.getElementById("score") as HTMLDivElement;
    this.#element.innerHTML = this.#score.toString();
  }

  static addScore() {
    this.#score++;
    this.#element.innerHTML = this.#score.toString();
  }
}

export default Score;

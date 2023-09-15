import GameObject from "./character";

class Counter extends GameObject {
  #time: number = 0;
  #startTime: number = 0;
  constructor(text: string = "") {
    super(text);
  }

  // 時間を進める
  tick() {
    this.#time -= Date.now() - this.#startTime;
    this.#startTime = Date.now();
    this.text = Math.ceil(this.#time / 1000).toString();
    if (this.#time <= 0) {
      this.#time = 0;
      this.text = "";
    }
  }

  // 時間を設定する
  set time(time: number) {
    this.#startTime = Date.now();
    this.#time = time;
    this.text = Math.ceil(this.#time / 1000).toString();
  }

  get countDown() {
    return Math.ceil(this.#time / 1000);
  }
}

export default Counter;

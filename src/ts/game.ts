import Bullet from "./bullet";
import GameObject from "./character";
import CollisionJudger from "./colllisionJudger";
import Controller from "./controller";
import Counter from "./counter";
import Field from "./field";
import Hero from "./hero";
import Reactor from "./reactor";
import Score from "./score";

class Game {
  readonly #hero: Hero;
  readonly #counter: Counter;
  #bulletList: Bullet[] = [];
  #reactorList: Reactor[] = [];
  #gameOver: boolean = false;
  #p = 0.005;
  #heroAndBulletCollisionJudger: CollisionJudger;
  #reactorAndBulletCollisionJudger: CollisionJudger;

  constructor() {
    Score.init();
    Field.init();
    this.#hero = new Hero("🐶");
    this.#hero.setPosition(Field.width / 2, Field.height - GameObject.size);
    Field.append(this.#hero);

    this.#counter = new Counter();
    this.#counter.setPosition(this.#hero.x, this.#hero.y - GameObject.size);
    Field.append(this.#counter);

    Controller.init(this.#hero, this.#counter);

    this.#heroAndBulletCollisionJudger =
      CollisionJudger.initHeroAndBulletCollisionJudger();
    this.#reactorAndBulletCollisionJudger =
      CollisionJudger.initReactorAndBulletCollisionJudger();
  }

  private createReactor() {
    const x = Math.random() * Field.width * 0.99;
    const y = Math.random() * Field.height * 0.7;
    const reactor = new Reactor("🔥");
    reactor.setPosition(x + (Field.width * (1 - 0.99)) / 2, y);
    Field.append(reactor);
    this.#reactorList.push(reactor);
  }

  private createBullet(x: number, y: number, dx: number, dy: number) {
    const bullet = new Bullet();
    bullet.setPosition(x, y - GameObject.size);
    bullet.setDelta(dx, dy);
    Field.append(bullet);
    this.#bulletList.push(bullet);
  }

  private step() {
    if (this.#counter.countDown) {
      this.#counter.tick();
      if (!this.#counter.countDown) {
        this.createBullet(this.#hero.x, this.#hero.y - GameObject.size, 0, -1);
      }
    } else {
      if (this.#bulletList.length === 0) {
        this.#counter.time = 3000;
      }
    }
    for (const bullet of this.#bulletList) {
      bullet.move();
      if (bullet.x < GameObject.size / 2 || bullet.x > Field.width) {
        bullet.reflectX();
      }
      if (bullet.y < GameObject.size / 2) {
        bullet.setPosition(bullet.x, GameObject.size / 2);
        bullet.reflectY();
      }
      if (bullet.y > Field.height) {
        bullet.remove();
      }

      if (bullet.removed) continue;
      if (bullet.isInvincible) continue;

      for (const reactor of this.#reactorList) {
        if (reactor.removed) continue;
        if (reactor.isInvincible) continue;

        if (this.#reactorAndBulletCollisionJudger.check(bullet, reactor)) {
          bullet.remove();
          reactor.remove();
          Score.addScore();

          if (bullet.dy !== 0) {
            this.createBullet(bullet.x, bullet.y, 1, 0);
            this.createBullet(bullet.x, bullet.y, -1, 0);
          } else {
            this.createBullet(bullet.x, bullet.y, 0, 1);
            this.createBullet(bullet.x, bullet.y, 0, -1);
          }
        }
        if (this.#heroAndBulletCollisionJudger.check(this.#hero, bullet))
          this.#gameOver = true;
      }
    }

    if (Math.random() < this.#p) this.createReactor();
    this.#p *= 1.001;

    this.#bulletList = this.#bulletList.filter((bullet) => !bullet.removed);
    this.#reactorList = this.#reactorList.filter((reactor) => !reactor.removed);
    this.#bulletList.forEach((bullet) => bullet.tick());
    this.#reactorList.forEach((reactor) => reactor.tick());
  }

  async start() {
    console.log("start");
    while (!this.#gameOver) {
      await new Promise((resolve) => setTimeout(resolve, 10));
      this.step();
    }
  }
}

export default Game;

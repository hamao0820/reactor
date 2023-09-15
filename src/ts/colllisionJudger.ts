import GameObject from "./character";

class CollisionJudger {
  static readonly heroAndBulletCollisionRatio = 0.3;
  static readonly reactorAndBulletCollisionRatio = 0.9;
  readonly #ratio: number;

  private constructor(ratio: number) {
    this.#ratio = ratio;
  }

  static initHeroAndBulletCollisionJudger() {
    return new CollisionJudger(this.heroAndBulletCollisionRatio);
  }

  static initReactorAndBulletCollisionJudger() {
    return new CollisionJudger(this.reactorAndBulletCollisionRatio);
  }

  check(a: GameObject, b: GameObject) {
    return (
      (b.x - a.x) ** 2 + (b.y - a.y) ** 2 < (GameObject.size * this.#ratio) ** 2
    );
  }
}

export default CollisionJudger;

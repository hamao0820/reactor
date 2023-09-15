import EnemyObject from "./enemyObject";
import Field from "./field";

class Reactor extends EnemyObject {
  constructor(text: string = "") {
    super(text);
  }

  static create() {
    const x = Math.random() * Field.width;
    const y = Math.random() * Field.height * 0.7;
    const reactor = new Reactor("🔥");
    reactor.setPosition(x, y);
    Field.append(reactor);
    return new Reactor();
  }
}

export default Reactor;

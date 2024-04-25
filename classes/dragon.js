class Dragon {

  constructor(name, color) {
    this.name = name
    this.color = color
  }

  static getDragons(...dragons) {
    return dragons
    .filter(dragon => dragon instanceof Dragon)
    .map(dragon => dragon.name)
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

class Users {
  constructor(name, score = 1000) {
    this.name = name;
    this.score = score;
  }

  // Метод увеличения очков
  plusScore(point) {
    this.score += point;
  }

  // Метод уменьшения очков
  minusScore(point) {
    this.score -= point;
  }
}

module.exports = Users;

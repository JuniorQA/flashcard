const fs = require('fs');
class Quest {
  constructor(number) {
    this.number = number;
  }
  quest() {
    if (this.number === '1') {
      return fs
        .readFileSync('./topics/first.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 === 0);
    }
    if (this.number === '2') {
      return fs
        .readFileSync('./topics/second.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 === 0);
    }
    if (this.number === '3') {
      return fs
        .readFileSync('./topics/third.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 === 0);
    }
  }
  answer() {
    if (this.number === '1') {
      return fs
        .readFileSync('./topics/first.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 !== 0);
    }
    if (this.number === '2') {
      return fs
        .readFileSync('./topics/second.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 !== 0);
    }
    if (this.number === '3') {
      return fs
        .readFileSync('./topics/third.txt', 'utf8')
        .split('\n')
        .filter((el) => el !== '')
        .filter((el, i) => i % 2 !== 0);
    }
  }
}

module.exports = Quest;

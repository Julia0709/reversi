'use strict';

const blank = ' ';
const first = 'x';
const second = 'o';

class Disc {
  constructor() {
    this.status = blank;
  }

  toString() {
    return this.status;
  }

  isBlank() {
    return this.status === blank;
  }

  isFirst() {
    return this.status === first;
  }

  isSecond() {
    return this.status === second;
  }

  putFirst() {
    if (this.isBlank()) {
      this.status = first;
    }
  }

  putSecond() {
    if (this.isBlank()) {
      this.status = second;
    }
  }

  switchDisc() {
    if (!this.isBlank()) {
      this.status = this.isFirst() ? second : first;
    }
  }
}
Disc.blank = blank;
Disc.first = first;
Disc.second = second;

module.exports = Disc;

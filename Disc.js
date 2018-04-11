'use strict';

class Disc {
  format() {
    return ' ';
  }

  switchDisc(turn) {
    return turn ? 'x' : 'o';
  }
}
module.exports = Disc;

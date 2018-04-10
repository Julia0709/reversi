'use strict';

class Board {
  constructor() {
    this.moves = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'x', 'o', ' ', ' ', ' '],
      [' ', ' ', ' ', 'o', 'x', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];
  }

  toString() {
    let board = '| |a|b|c|d|e|f|g|h|\n';
    for (let i = 0; i < this.moves.length; i++) {
      const my = this.moves[i];
      board += `|${i}|`;
      for (let j = 0; j < my.length; j++) {
        const m = my[j];
        board += `${m}|`;
      }
      board += '\n';
    }
    return board;
  }

  isAvailable(x, y, disc) {
    console.log(`x: ${x}, y: ${y}, d: ${disc}, moves: ${this.moves[y][x]}`);
    if (this.moves[y][x] !== ' ') {
      return false;
    }
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        console.log(
          `LOOP${i} ${j} x: ${x}, y: ${y}, d: ${disc}, boolean: ${this.checkDisc(
            x,
            y,
            i,
            j,
            disc,
            true,
          )}`,
        );
        if (this.checkDisc(x, y, i, j, disc, true)) {
          return true;
        }
      }
    }
    return false;
  }

  updateBoard(x, y, disc) {
    this.moves[y][x] = disc;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        this.checkDisc(x, y, i, j, disc, false);
      }
    }
  }

  checkDisc(x, y, dx, dy, disc, first) {
    x += dx;
    y += dy;

    const my = this.moves[y];
    if (!my) {
      return false;
    }
    const m = my[x];
    if (!m || m === ' ') {
      return false;
    }

    if (m === disc) {
      return true;
    }

    if (m !== disc && this.checkDisc(x, y, dx, dy, disc, first)) {
      if (!first) {
        my[x] = disc;
      }
      return true;
    }
  }
}
module.exports = Board;

'use strict';

const Disc = require('./Disc');
const disc = new Disc();

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

  isAvailable(x, y, first) {
    const d = disc.switchDisc(first);
    if (this.moves[y][x] !== ' ') {
      return false;
    }
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.turnDisk(x, y, i, j, d, true, true)) {
          return true;
        }
      }
    }
    return false;
  }

  updateBoard(x, y, first) {
    const d = disc.switchDisc(first);
    this.moves[y][x] = d;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        this.turnDisk(x, y, i, j, d, true, false);
      }
    }
  }

  turnDisk(x, y, dx, dy, d, first, inspect) {
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

    if (!first && m === d) {
      return true;
    }

    if (m !== d && this.turnDisk(x, y, dx, dy, d, false, inspect)) {
      if (!inspect) {
        my[x] = d;
      }
      return true;
    }
  }
}
module.exports = Board;

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

  updateBoard(x, y, player) {
    let disc = player === 'player1' ? 'x' : 'o';
    this.moves[y][x] = disc;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        this.checkDisc(x, y, i, j, disc);
      }
    }
  }

  isReversible(x, y, player) {
    if (this.moves[y][x] !== ' ') {
      return false;
    }
    let disc = player === 'player1' ? 'x' : 'o';
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.checkDisc(x, y, i, j, disc)) {
          return true;
        }
      }
      return false;
    }
  }

  checkDisc(x, y, dx, dy, disc, second) {
    const opponent = disc === 'x' ? 'o' : 'x';
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

    if (m === opponent) {
      if (this.checkDisc(x, y, dx, dy, disc)) {
        if (second) {
          my[x] = disc;
        }
        return true;
      }
    }
  }
}
module.exports = Board;

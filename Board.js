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
    this.moves[x][y] = disc;
    const opponent = disk === 'x' ? 'o' : 'x';
    this.reverseDisc(x, y, disc, opponent);
    toString();
  }

  reverseDisc(x, y, disc, opponent) {
    const my = moves[y];
    if (!my) {
      return;
    }
    const m = my[x];
    if (!m) {
      return;
    }
    if (m === disc) {
      // TODO
      return;
    }
    if (m === opponent) {
      this.reverseDisc(x - 1, y);
      this.reverseDisc(x + 1, y);
      this.reverseDisc(x, y - 1);
      this.reverseDisc(x, y + 1);
    }
  }
}
module.exports = Board;
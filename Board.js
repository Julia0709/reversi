'use strict';

const Disc = require('./Disc');

const row = 8;

class Board {
  constructor() {
    this.grid = this.createNewBoard();
  }

  createNewBoard() {
    const grid = new Array(row);
    for (let i = 0; i < row; i++) {
      grid[i] = new Array(row);
      const g = grid[i];
      for (let j = 0; j < row; j++) {
        g[j] = new Disc();
        const d = g[j];
        if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
          d.putFirst();
        }
        if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
          d.putSecond();
        }
      }
    }
    return grid;
  }

  toString() {
    let board = '| |a|b|c|d|e|f|g|h|\n';
    for (let i = 0; i < row; i++) {
      board += `|${i}|`;
      for (let j = 0; j < row; j++) {
        board += `${this.grid[i][j]}|`;
      }
      board += '\n';
    }
    return board;
  }

  isPracticable(isFirst) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row; j++) {
        if (this.isAvailable(i, j, isFirst)) {
          return true;
        }
      }
    }
    return false;
  }

  isAvailable(x, y, isFirst) {
    if (!this.grid[y][x].isBlank()) {
      return false;
    }
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.turnDisk(x, y, i, j, isFirst, true, true)) {
          return true;
        }
      }
    }
    console.log(`[isAvailable()] x: ${x}, y: ${y}, isFirst: ${isFirst}`);
    return false;
  }

  updateBoard(x, y, isFirst) {
    const disc = this.grid[y][x];
    isFirst ? disc.putFirst() : disc.putSecond();

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        this.turnDisk(x, y, i, j, isFirst, true, false);
      }
    }
  }

  turnDisk(x, y, dx, dy, isFirst, first, inspect) {
    x += dx;
    y += dy;

    const g = this.grid[y];
    if (!g) {
      return false;
    }
    const disc = g[x];
    if (!disc || disc.isBlank()) {
      return false;
    }

    if (isFirst === disc.isFirst()) {
      return !first;
    }

    if (
      isFirst === disc.isSecond() &&
      this.turnDisk(x, y, dx, dy, isFirst, false, inspect)
    ) {
      if (!inspect) {
        disc.switchDisc();
      }
      return true;
    }
  }

  countDisc() {
    const sum1 = 0;
    const sum2 = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row; j++) {
        const disc = this.grid[i][j];
        if (disc.isFirst()) {
          sum1++;
        } else if (disc.isSecond()) {
          sum2++;
        }
      }
    }
    return { sum1, sum2 };
  }
}
module.exports = Board;

'use strict';

const Disc = require('./Disc');

class Board {
  constructor() {
    this.grid = this.createNewBoard();
  }

  createNewBoard() {
    const row = 8;
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
    for (let i = 0; i < this.grid.length; i++) {
      const my = this.grid[i];
      board += `|${i}|`;
      for (let j = 0; j < my.length; j++) {
        const m = my[j];
        board += `${m}|`;
      }
      board += '\n';
    }
    return board;
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
      return true;
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
}
module.exports = Board;

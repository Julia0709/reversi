'use strict';

const Board = require('./Board');
const board = new Board();

const Disc = require('./Disc');
const disc = new Disc();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let player = 'player1';

const coordinateMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

function getInput() {
  console.log(board.toString());

  const message = `${player}, enter your move (ex: d3)\n`;
  rl.question(message, answer => {
    const [a, b] = answer.split('');

    const x = coordinateMap.a;
    const y = Number(b);
    const d = disc.switchDisc(player);
    console.log(`x: ${x}, y: ${y}, d: ${d}`);
    if (board.isAvailable(x, y, d)) {
      board.updateBoard(x, y, d);
      player = player === 'player1' ? 'player2' : 'player1';
    } else {
      console.log(`Oops! You cannot make ${answer}. Try again.`);
    }

    getInput();
  });
}

getInput();

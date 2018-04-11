'use strict';

const Board = require('./Board');
const board = new Board();

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

    const x = coordinateMap[a];
    const y = Number(b);
    const first = player === 'player1';
    console.log(`first: ${first}`);

    if (board.isAvailable(x, y, first)) {
      board.updateBoard(x, y, first);
      player = switchPlayer(player);
    } else {
      console.log(`Oops! Cannot make ${answer}, try again.`);
    }

    getInput();
  });
}

function switchPlayer(player) {
  return player === 'player1' ? 'player2' : 'player1';
}

getInput();

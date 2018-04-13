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

  const isFirst = player === 'player1';

  if (!board.isPracticable(isFirst)) {
    if (!board.isPracticable(!isFirst)) {
      console.log('Game finished!');
      return showResult();
    }
    console.log(`${player} has to pass.`);
    player = switchPlayer(player);
    return getInput();
  }

  const message = `${player}, enter your move (ex: d3)\n`;
  rl.question(message, answer => {
    const [a, b] = answer.split('');

    const x = coordinateMap[a];
    const y = Number(b);

    console.log(`[main.js] x: ${x}, y: ${y}, isFirst: ${isFirst}`);

    if (isNaN(x) || isNaN(y) || !board.isAvailable(x, y, isFirst)) {
      console.log(`Oops! Cannot make ${answer}, try again.`);
      return getInput();
    }

    board.updateBoard(x, y, isFirst);
    player = switchPlayer(player);

    getInput();
  });
}

function switchPlayer(player) {
  return player === 'player1' ? 'player2' : 'player1';
}

function showResult() {
  console.log(`＼(^o^)／`);
}

getInput();

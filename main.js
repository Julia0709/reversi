'use strict';

const Board = require('./Board');
const board = new Board();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const player1 = 'player1';
const player2 = 'player2';
let currentPlayer = player1;

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

  const isFirst = currentPlayer === player1;

  if (!board.isPracticable(isFirst)) {
    if (!board.isPracticable(!isFirst)) {
      return showResult();
    }
    console.log(`${currentPlayer} has to pass.`);
    currentPlayer = switchPlayer(currentPlayer);
    return getInput();
  }

  const message = `${currentPlayer}, enter your move (ex: d3)\n`;
  rl.question(message, answer => {
    const [a, b] = answer.split('');

    const x = coordinateMap[a];
    const y = Number(b);

    if (isNaN(x) || isNaN(y) || !board.isAvailable(x, y, isFirst)) {
      console.log(`Oops! Cannot make ${answer}, try again.`);
      return getInput();
    }

    board.updateBoard(x, y, isFirst);
    currentPlayer = switchPlayer(currentPlayer);

    getInput();
  });
}

function switchPlayer(currentPlayer) {
  return currentPlayer === player1 ? player2 : player1;
}

function showResult() {
  const { sum1, sum2 } = board.countDisc();
  let message = '';
  if (sum1 > sum2) {
    message = `${player1} Win!`;
  } else if (sum < sum2) {
    message = `${player2} Win!`;
  } else {
    message = `Draw`;
  }
  console.log(
    `\n＼(^o^)／ Game finished ＼(^o^)／\n${player1}: ${sum1} vs ${player2}: ${sum2}\n\n${message}`,
  );
}

getInput();

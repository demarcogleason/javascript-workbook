'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn){
      
        return true;
    } else if ((board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)){
        return true;
    } else if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)){
        return true;
    } else {
        return false;
    }
}

function verticalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn){

        return true;
    } else if ((board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn)){
        return true;
    } else if ((board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)){
        return true;
    } else {
        return false;
    }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn){

       return true;
   } else if ((board[0][2] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn)){
       return true;
   } else {
       return false;
   }
}

function checkForWin() {
  // Your code here
  if (horizontalWin() || verticalWin() || diagonalWin()){
      console.log(playerTurn + " wins the game!");
              return true;
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
   if(checkForWin()){
     printBoard();
     return (playerTurn + "wins the game!")
   }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
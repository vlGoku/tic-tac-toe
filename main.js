"use strict";

/* const info = document.querySelector("#info");

let go = "circle";
info.textContent = "Circle goes first";

const restartButton = document.querySelector("#restartButton");

function createBoard() {
const startCells = ["", "", "", "", "", "", "", "", ""];
const gameboard = document.querySelector("#gameboard");
startCells.forEach((_cell, index) => {
const cellElement = document.createElement("div");
cellElement.classList.add("square");
cellElement.id = index;
cellElement.addEventListener("click", addGo);
gameboard.append(cellElement);
});
}

function addGo(e) {
const goDisplay = document.createElement("div");
goDisplay.classList.add(go);
e.target.append(goDisplay);
go = go === "circle" ? "cross" : "circle";
info.textContent = "it is now " + go + "'s go.";
e.target.removeEventListener("click", addGo);
checkScore();
}

function checkScore() {
const allSquares = document.querySelectorAll(".square");
const winningMessageTextElement = document.querySelector(
"[data-winning-message-text]"
);
const winningMessageElement = document.querySelector("#winningMessage");
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
winningCombos.forEach((array) => {
const circleWins = array.every((cell) =>
allSquares[cell].firstChild?.classList.contains("circle")
);

if (circleWins) {
info.textContent = "Circle Wins!";
allSquares.forEach((square) =>
square.replaceWith(square.cloneNode(true))
);
winningMessageTextElement.innerText = "Circle Wins";
winningMessageElement.classList.add("show");
return;
}
});
winningCombos.forEach((array) => {
const crossWins = array.every((cell) =>
allSquares[cell].firstChild?.classList.contains("cross")
);

if (crossWins) {
info.textContent = "Cross Wins!";
allSquares.forEach((square) =>
square.replaceWith(square.cloneNode(true))
);
winningMessageTextElement.innerText = "Cross Wins";
winningMessageElement.classList.add("show");
return;
}
});
}

restartButton.addEventListener("click", () => {
location.reload();
});

function init() {
createBoard();
}
init(); */

class Player {
  constructor(name) {
    this.name = name;
    this.sign = "";
    this.hasWon = false;
  }
  setSign(sign) {
    this.sign = sign;
  }
}

class Game {
  constructor() {
    this.player1 = {};
    this.player2 = {};
    this.gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
  }

  createPlayers(namePlayer1, namePlayer2) {
    this.player1 = new Player(namePlayer1);
    this.player2 = new Player(namePlayer2);
    this.player1.setSign("X");
    this.player2.setSign("O");
  }

  checkWin() {
    this.winningConditions.forEach((condition) => {
      if (
        this.gameboard[condition[0]] === this.player1.sign &&
        this.gameboard[condition[1]] === this.player1.sign &&
        this.gameboard[condition[2]] === this.player1.sign
      ) {
        this.player1.hasWon = true;
      }
      if (
        this.gameboard[condition[0]] === this.player2.sign &&
        this.gameboard[condition[1]] === this.player2.sign &&
        this.gameboard[condition[2]] === this.player2.sign
      ) {
        this.player2.hasWon = true;
      }
    });
  }

  checkDraw() {
    let draw = true;
    if (this.gameboard.includes(0)) {
      draw = false;
    }
    return draw;
  }

  checkEnd() {
    return this.checkWin();
  }

  placeSign(sign, x) {
    this.gameboard[x] = sign;
  }

  clearGame() {
    this.gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.score = 0;
  }
}

(function init() {
  const game = new Game();
  let startButton = document.querySelector("#startGame");
})();

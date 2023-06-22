"use strict";

const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
info.textContent = "Circle goes first";

const restartButton = document.querySelector("#restartButton");

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameboard.append(cellElement);
  });
}

createBoard();

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
    const circleWins = array.every((cell) =>
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
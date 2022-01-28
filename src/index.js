"use strict"; //note
import Hangman from "./hangman";
import getPromisePuzzle from "./request";

let player1;

//setup puzzle & remaining DOM
const puzzle = document.querySelector("#puzzle");
const remaining = document.querySelector("#remaining");
const restart = document.querySelector("#restart");

//event to ketdown
window.addEventListener("keydown", (e) => {
  if (
    player1.tryNumber > 0 &&
    player1.status === "playing" //here
  ) {
    const guess = e.key;
    player1.makeGuess(guess);
    render();
  }
});

const render = () => {
  puzzle.innerHTML = "";
  player1.puzzle.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    puzzle.appendChild(span);
  });
  remaining.textContent = player1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPromisePuzzle(2);
  player1 = new Hangman(puzzle, 5);
  render();
};

// initialize
startGame();

//restart button
restart.addEventListener("click", (e) => {
  startGame();
});

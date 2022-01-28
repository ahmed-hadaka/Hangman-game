"use strict";

class Hangman {
  constructor(word, tryNumber) {
    this.word = word.toLowerCase().split("");
    this.tryNumber = tryNumber;
    this.gessedLetters = [];
    this.status = "playing"; //yah we can do that!
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.gessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.gessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.gessedLetters = [...this.gessedLetters, guess];
    }

    if (isUnique && isBadGuess) {
      this.tryNumber--;
    }
    this.calculateStatue();
  }
  calculateStatue() {
    //check is finished
    const finish = this.word.every(
      (letter) => this.gessedLetters.includes(letter) || letter === " "
    );

    if (this.tryNumber > 0 && finish) {
      this.status = "finished";
    } else if (this.tryNumber <= 0) {
      this.status = "failed";
    } else this.status = "playing";
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.tryNumber}`;
    } else if (this.status === "finished") {
      return "Creat word! You guessed the word";
    } else {
      return `Nice try! The word was "${this.word.join("")}"`;
    }
  }
}

export { Hangman as default };

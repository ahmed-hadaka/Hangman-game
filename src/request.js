"use strict";

const getPromisePuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}` //we could include no http(s), just enough to include // to let the browser to spacify it's protocol
  );
  //it's never executed until status complete i.e, status=4
  if (response.status === 200) {
    const data = await response.json(); //this fun parse the data and return it as a promise data ...AND YOU CANT'T PUT ANYTHING WITH IT UNTIL YOU USE await operator :(
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch the data");
  }
};

export { getPromisePuzzle as default };

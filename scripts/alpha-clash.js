/*
1. step-1: make hidden the home screen -> add class hidden
2. step-2: show the playground -> remove class hidden

*/

function handleKeyPress(event) {
  const playerPresse = event.key;

  if (playerPresse === "Escape") {
    gameOver();
  }

  const expectedAlphabet = aphabetById("live-alphabet");

  // check the answers:
  if (playerPresse === expectedAlphabet) {
    const currentScore = getElementValueById("live-score");
    const updateScore = currentScore + 1;
    setElementValueById("live-score", updateScore);

    removeBg(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getElementValueById("live-life");
    const updateLife = currentLife - 1;
    setElementValueById("live-life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyPress);

function continueGame() {
  // display randomly genarate alphabet
  const live = document.getElementById("live-alphabet");
  const liveBg = (live.innerText = randomAlphabet());
  setBg(liveBg);
}

function play() {
  addHideen("home");
  addHideen("score");
  removeHidden("playground");

  // reset life value
  setElementValueById("live-life", 5);
  setElementValueById("live-score", 0);

  continueGame();
}

function gameOver() {
  addHideen("playground");
  removeHidden("score");

  const alphabet = aphabetById("live-alphabet");
  removeBg(alphabet);

  const finalScore = getElementValueById("live-score");
  setElementValueById("final-score", finalScore);
}

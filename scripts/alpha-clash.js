/*
1. step-1: make hidden the home screen -> add class hidden
2. step-2: show the playground -> remove class hidden


*/

/*
function play() {


  const home = document.getElementById("home");
  home.classList.add("hidden");

  const playground = document.getElementById("playground");
  playground.classList.remove("hidden");
}

*/

// wanna use more advanced js

function continueGame() {
  // display randomly genarate alphabet
  const live = document.getElementById("live-alphabet");
  const liveBg = live.innerText =  randomAlphabet();
  setBg(liveBg);
}

function play() {
  addHideen("home");
  removeHidden("playground");
  continueGame();
}

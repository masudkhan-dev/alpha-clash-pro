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

function play() {
  addHidden("home");
  removeHidden("playground");
}

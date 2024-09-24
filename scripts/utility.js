function addHideen(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function removeHidden(id) {
  const item = document.getElementById(id);
  item.classList.remove("hidden");
}

function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const array = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const number = Math.round(randomNumber);

  const letter = array[number];
  return letter;
}

// style alphabets selected
function setBg(id) {
  const item = document.getElementById(id);
  item.classList.add("bg-orange-400");
}

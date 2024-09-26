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

function removeBg(_id) {
  const item = document.getElementById(_id);
  item.classList.remove("bg-orange-400");
}

// for life score
function getElementValueById(_id) {
  const item = document.getElementById(_id);
  const itemText = item.innerText;
  const value = parseInt(itemText);
  return value;
}

function setElementValueById(_id, value) {
  const item = document.getElementById(_id);
  item.innerText = value;
}

function aphabetById(_id) {
  const item = document.getElementById(_id);
  const itemText = item.innerText;
  const alphabet = itemText.toLowerCase();
  return alphabet
}

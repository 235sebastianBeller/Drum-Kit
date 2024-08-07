const buttons = document.querySelectorAll(".drum");

const musicForDrumButtons = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};

function getPath(key) {
  return `./sounds/${musicForDrumButtons[key]}.mp3`;
}

function playSound(key) {
  if (!(key in musicForDrumButtons)) return;
  let audio = new Audio(getPath(key));
  audio.play();
}

function playMusicForTheDrumButton(event) {
  let key = event.target.innerHTML;
  playSound(playSound(key));
}

function addEventListenersToTheButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", playMusicForTheDrumButton);
  });
}

document.addEventListener("keypress", (event) => {
  let key = event.key;
  playSound(playSound(key));
});

addEventListenersToTheButtons();

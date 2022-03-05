"use strict";
const score0El = document.querySelector("#score--0");
const score6El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score6El.textContent = 0;


diceEl.classList.add('hidden');

// Rolling Button
btnRoll.addEventListener("click", function () {
  // 1. random dice roll
  // 2. display dice
  // 3. check for a rolled 1; if true switch to next player
  let number = Math.floor(Math.random() * 6) + 1;
  console.log(number);
  console.log('click');

  diceEl.classList.remove("hidden");

  switch (number) {
    case 1:
      diceEl.src = "/dice-1.png";
      break;
    case 2:
      diceEl.src = "/dice-2.png";
      break;
    case 3:
      diceEl.src = "/dice-3.png";
      break;
    case 4:
      diceEl.src = "/dice-4.png";
      break;
    case 5:
      diceEl.src = "/dice-5.png";
      break;
    case 6:
      diceEl.src = "/dice-6.png";
      break;

    default:
        console.log('No number')
      break;
  }


});

btnNew.addEventListener("click", function () {});

btnHold.addEventListener("click", function () {});

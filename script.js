"use strict";
const score0El = document.querySelector("#score--0");
const score6El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const score = [0, 0];

score0El.textContent = 0;
score6El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add("hidden");

// Rolling Button
btnRoll.addEventListener("click", function () {
  // 3. check for a rolled 1; if true switch to next player
  let number = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");

  console.log(number);
  console.log(activePlayer + " this is the current player");


  if (activePlayer === 0) {
    if (number === 1) {
        currentScore = 0
        diceEl.src = `/dice-${number}.png`;
        document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
        activePlayer++;
     
    } else {
      currentScore = currentScore + number;
      diceEl.src = `/dice-${number}.png`;
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
    }
  } else 
  {
    if (number === 1) {
        currentScore = 0
        diceEl.src = `/dice-${number}.png`;
        document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
        activePlayer--;
        

       
      } else {
        currentScore = currentScore + number;
        diceEl.src = `/dice-${number}.png`;
        document.getElementById(`score--${activePlayer}`).textContent =
          currentScore;
      }
  }
  console.log(currentScore)

  //   switch (number) {
  //     case 1:
  //       diceEl.src = "/dice-1.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);

  //       break;
  //     case 2:
  //       diceEl.src = "/dice-2.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);
  //       break;
  //     case 3:
  //       diceEl.src = "/dice-3.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);
  //       break;
  //     case 4:
  //       diceEl.src = "/dice-4.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);
  //       break;
  //     case 5:
  //       diceEl.src = "/dice-5.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);
  //       break;
  //     case 6:
  //       diceEl.src = "/dice-6.png";
  //       currentScore = currentScore + number;
  //     //   console.log(currentScore);
  //       break;

  //     default:
  //       console.log("No number");
  //       break;

  //   }
});

btnNew.addEventListener("click", function () {});

btnHold.addEventListener("click", function () {});

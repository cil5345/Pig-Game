"use strict";
const score0El = document.querySelector("#score--0");
const score6El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')



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
        document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        activePlayer++;
     
    } else {
      currentScore = currentScore + number;
      diceEl.src = `/dice-${number}.png`;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  } else 
  {
    if (number === 1) {
        currentScore = 0
        diceEl.src = `/dice-${number}.png`;
        document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
        player1El.classList.toggle('player--active')
        player0El.classList.toggle('player--active')
        activePlayer--;
        

       
      } else {
        currentScore = currentScore + number;
        diceEl.src = `/dice-${number}.png`;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      }
  }
  console.log(currentScore)

 
});




btnHold.addEventListener("click", function () {
score[activePlayer] += currentScore

if (score[activePlayer] >= 100 ) {
    console.log(`player ${activePlayer} wins!`)
} else {



document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

currentScore = 0
document.getElementById(`current--${activePlayer}`).textContent = currentScore;

document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')  
activePlayer = activePlayer === 0 ? 1 : 0
document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
}




});










// btnNew.addEventListener("click", function () {


// });
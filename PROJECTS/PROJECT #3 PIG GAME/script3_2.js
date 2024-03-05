'use strict';

// step1 select elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// step2 hide the dice picture
// -->add a hidden class in css file,
// -->then select the dice class
const diceEl = document.querySelector('.dice');
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// step3 react to clicking the roll button
// -->select the button element
// -->add event listener to the button
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// 3.3.1--define the currentSore variable
let currentScore = 0;

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 3.1--generate a random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNum);
  // 3.2--display dice
  diceEl.classList.remove('hidden');
  // 3.2.1--display the dice number same as the dice picture
  // -->manipulate the src attribute in img element
  diceEl.src = `./imgs/dice-${diceNum}.png`;

  // 3.3--checke for roll number 1, if true, switch to next player
  // -->add the dice number to current element when the number !== 1
  // -->we can not define the currentSore variable in the function, as when we click the button, the current score would be reset
  if (diceNum !== 1) {
    //const currentScore0El = document.querySelector('#current--0');
    //const currentScore1El = document.querySelector('#current--1');
    currentScore += diceNum;
    // -->in the future, we need to display the current score at current player
    currentScore0El.textContent = currentScore; // change later
  } else {
    // -->switch to next player
  }
});

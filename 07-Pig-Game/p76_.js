/***p76_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 PIG GAME************************************
    *step1 select elements
    *step2 hide the dice picture
       -->add a hidden class in css file,
       -->then select the dice class
*/

/***p77_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 ROLLING THE DICE****************************
    **for big application, it's a good idea to draw a flow along with the process of solving problems, divide big problem into small ones

    *step3 react to clicking the roll button
       -->select the button element
       -->add event listener to the button
    **3.1--generate a random dice roll
    **3.2--display dice
    ***3.2.1--display the dice number same as the dice picture
          -->manipulate the src attribute in img element
    **3.3--checke for roll number 1, if true, switch to next player
          -->add the dice number to current element when the number !== 1
          -->we can not define the currentSore variable in the function, as when we click the button, the current score would be reset
    ***3.3.1--define the currentSore variable
          -->in the future, we need to display the current score at current player
    ***3.3.2--create a variable to hold 0/1
*/

/***p78_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 SWITCH THE ACTIVE PLAYER********************
    ***3.3.2--create a variable to hold 0/1
          -->we store the scores of both players in an array
          -->the score of play1 is in position0 of the array, the score of play2 is in position1 of the array
    ***3.3.3--instead of manipulating the element of player0, we select the element dynamically
          -->make score addition work both for player0 and player1
          --->track which player is the current player
    ***3.3.4--change activePlayer = 0; from 0 to 1, or 1 to 0;
          -->reassign the activePlayer, check whether right now it is play1
    ***3.3.5--change the current score back to 0
    ***3.3.6--change the background color
          -->remove class 'player--active' from the first player to the other player
          -->select the two class
    ****3.3.6.1--change the class in '.player--0/1' element
          -->use toggle method
          
*/

/***p79_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 HOLDING CURRENT SCORE********************
    *step4 hole the current score
       -->we want something to happen when we click the hold button
       -->add event listener to hold button
    **4.1 add current score to active player's score
          -->we use a scores variable to store the score
          -->use activePlayer variable to get the correct score of the current player
    ***4.1.1--display the total score
    **4.2--check score is already >= 100
    ***4.2.1--if so, finish the game
          -->assign a player winner class in css file '.player--winner'
          -->remove the '.player--active' class
    ***4.2.2--finish/stop the game, it no longer works when press the buttons
    ****4.2.2.1--define a boolean value
    ****4.2.2.2--to set the playing situation in btnRoll function
    ****4.2.2.3--to set the playing situation in btnHold function
    ****4.2.2.4--hide the dice picture
    ***4.2.3--if not, switch to the next player
          -->use again 'switch player' as in the step3.3, so create function to avoide repeated code or to reuse it
    ****4.2.3.1--create a function 'switchPlayer()'
    ****4.2.3.2--execute the function
*/

/***p80_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 RESETTING THE GAME***********************
    *step5 reset the game
         -->we want to remove winner class when we click the new button, and set all the player and current scores to 0
         -->add event listener to hold button
    **5.1 reset all the scores like below
    **5.2 create a function for the aboving code
    ***5.2.1--put the starting conditions in init function
    **5.3--execute the init function, then when reload the webpage, the game back to initial situation
    ***5.3.1--solution: to declare these variables outside of any functions without any value
    ***5.3.2--reassign the values of the variables
    ***5.3.2--pass the init function as a parameter to 'btnNew.addEventListener('click', init);' to execute it when click the new button
*/

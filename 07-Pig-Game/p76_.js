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
    ***3.3.2--switch to next player
*/

/***p78_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #3 SWITCH THE ACTIVE PLAYER********************
*/

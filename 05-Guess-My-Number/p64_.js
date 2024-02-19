/***p64************************************************************************
  document.querySelector(): a method select an element in Javascript
                            document is the entry point to the DOM
                            the querySelector method is available on the document object
  document.querySelector().textContent: get the text of the element
*/

/***p65_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS*****************
- what is DOM and DOM manipulation
    DOM: document object model, structured represntation of html documents
         created by brower as soon as the html page loads and stored in a tree structure
         allows javascript to access html elements and styles to manipulate them
         such as change text, html attributes, and css styles
         in short, DOM is a connection point between html document and javacript code
- how does DOM work
    DOM and DOM MANIPULATION is not part of JS language. 
    DOM and DOM method is part of something called the web APIs.
- web APIs
    API: application programming interface 
    like libraries that browser implement and we can access from JS code
*/

/***p66_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS*************
- SELECT AND MANIPULATING ELEMENTS
    document.querySelector().textContent
    document.querySelector().value

*/

/***p67_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
- HANDLING CLICK EVENTS
   document.querySelector(' ').addEventListener('click', function () {
     console.log(document.querySelector(' ').value);
   });  
   /// select the button, then use addEventListenr method on the element to attach an event handler, the handle is a function, a function expression.  we pass it directly here into addEventListenr method. the first argument('click') of the method is the name of the event that we're listening for; the second argument is the function value, which contains the codes we want to execute whenever teh event happens
   /// NOTE: we do not call the function anywhere, we only define the function, then pass it to event handle, it is the js engine who will call this function as soon as the event happens. That's why the function is called only when the event happens(click)
*/

/***p68_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
-IMPLEMENTING THE GAME LOGIC
   /// implement all the other senarios, where the guess is correct, where it's equal to teh secret number, generate the secret number and compare it with the guess number 
   /// we have three senarios
   /// first step: define the secret number outside the function handler
   /// second step: set the three senarios using if statement
   /// third step: each wrong guess, the score decrease by 1 
    // create a variable for the score in the code, then update the variable to decrease that variable, then display the value of that variable in the score lable 
*/

/***p69_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
-MANIPULATING CSS STYLES USING JAVASCRIPT
   /// turn the background color to green when guess the correct number and the secret number to be wider
     document.querySelector().style.backgrounColor = '';
     document.querySelector().style.width = '';
     // the value of the style shoul be string
*/

/***p70_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
-CODING CHALLENG -- RESET THE GAME
   /// use document.querySelector('.xxx').xxx to set the values back as beginning
*/

/***p71_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
- IMPLEMENT THE HIGH SCORE FUNCTIONALITY
   /// need a variable for the highscore, use if statement to set highscore = score to get highscore as well as remain the high when click 'Again' button
*/

/***p72_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS***********
- REFACTORING OUR CODE: THE DRY PRINCIPLE
   /// get rid of duplicate code
    // in (guess > secretNumber) and (guess < secretNumber) senarios, most codes are the same
     / use a technic called refactoring: means to structure the code without changing how it works
     / first step: to identify the duplicate code
     / second step:
       //* when guess is wrong
       else if (guess !== secretNumber){
       if (score > 1) {
         //* use a turnery operator
        document.querySelector( '.message').textContent = guess > secretNumber ? '📈 Too hight!' : '📈 Too hight!'; 
        score--;
        document.querySelector('.score').textContent = score;
       } else {
        document.querySelector('.message').textContent = '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
       }
    // set the duplicate "document.querySelector('.message').textContent"
     / create a function: 
         const displayMessage = function (message){
           document.querySelector('.message').textContent = message;
         }
*/

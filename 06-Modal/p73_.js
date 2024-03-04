/***p73_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_PROJECT #2 MODAL WINDOW**************************
    --- way of selecting multiple elements with the same class: document.querySelectorAll('.show-modal')
    --- with for loop, to do some running to each of them, like logging their text content: console.log(btnsOpenModal[i].textContent)
 */

/***p74_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_WORKING WITH CLASSES*****************************
    --- recap: if you want to use the same function in multiple event listeners, then you need to specify that function as a seperate function, then pass that function as an argument to multiple 'addEventListener' methods
    --- need to use adding and removing classed all the time in order to change the appearance of elements on our page because classes allow us to aggregate multiple CSS properties in just one. by adding and removing, we can activate and deactivate certain styles
*/

/***p75_
 SECTION_JAVASCRIPT IN THE BROWSER: DOM AND EVENTS FUNDAMENTALS
 LECTURE_HANDLING AN 'ESC' KEYPRESS EVENT*****************
    --- step5 use the esc key to close the modal, which means how to respond to keyboard events
      -- keyboard event is called global event, because they do not hanppend on one specific element
      -- for the globle event, we usually listen on the whole document
      -- listen for events everywhere, no matter where they happen on the page, they will always trigger the event handler that we are going to specify
      
      -- to close the pop-up modal only when we press the esc key
      -- how will we know which key was actually pressed if this event happens for all the keys? -> the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed
      -- when we press any key on the keyboard, a key down event is generated, the handle function is waiting for that event to happen
      -- any time the event happens, JS does generates an object, which contains all the information about the event itself
      -- we can access the object in the event handler function
      -- up to now, we have never looked at that event, we only listen for it and then react to it
      -- to look at the event object in order to figure out which key was pressed
      -- give the function a parameter, like 'e' or any other names
      
      -- the information about which key is pressed is achieved from the key property
      
      -- use the information to close the modal whenever esc key is pressed
      -- and check if the modal is open -> the modal open when is 'hidden' class is removed -> check if the 'hidden' class is removed -> check if the element has a certain class
*/

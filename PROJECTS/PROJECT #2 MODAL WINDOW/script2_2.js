'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i].textContent);
  // 不用加花括号？ --- because there is only one line of code

  // step1 to react to a click on each of these buttons -> attach an event handler to each of three buttons in the loop
  btnsOpenModal[i].addEventListener('click', function () {
    //** console.log('button clicked');
    //step2 to remove the hidden class in order to show the hidden modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// step3 add eventlistener to btnCloseModal to make the modal hidden after clicking the x button
//** btnCloseModal.addEventListener('click', function () {
//**   modal.classList.add('hidden');
//**   overlay.classList.add('hidden');
//** });

//** overlay.addEventListener('click', function () {
//**   modal.classList.add('hidden');
//**   overlay.classList.add('hidden');
//** });

// step4 to restructure/refactor the code as there are repeated code in the above two functions
// define a variable to the function, then use the variable as one parameter of addEventListener
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// recap: if you want to use the same function in multiple event listeners, then you need to specify that function as a seperate function, then pass that function as an argument to multiple 'addEventListener' methods
// need to use adding and removing classed all the time in order to change the appearance of elements on our page because classes allow us to aggregate multiple CSS properties in just one. by adding and removing, we can activate and deactivate certain styles
// to check if a class is actually present on a certain element

// step5 use the esc key to close the modal, which means how to respond to keyboard events
// keyboard event is called global event, because they do not hanppend on one specific element
// for the globle event, we usually listen on the whole document

// listen for events everywhere, no matter where they happen on the page, they will always trigger the event handler that we are going to specify
//** document.addEventListener('keydown', function () {
//**   console.log('a key was pressed');
//** });

// to close the pop-up modal only when we press the esc key
// how will we know which key was actually pressed if this event happens for all the keys? -> the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed
// when we press any key on the keyboard, a key down event is generated, the handle function is waiting for that event to happen
// any time the event happens, JS does generates an object, which contains all the information about the event itself
// we can access the object in the event handler function
// up to now, we have never looked at that event, we only listen for it and then react to it
// to look at the event object in order to figure out which key was pressed
// give the function a parameter, like 'e' or any other names
//** document.addEventListener('keydown', function (e) {
//**   console.log(e);
//** });
// when the event('keydown') occurs, JS call the function and pass the event object as an argument
// in the webpage console: KeyboardEvent {isTrusted: true, key: 'e', code: 'KeyE', location: 0, ctrlKey: false, …}  -> it's an object that is generated by JS

// the information about which key is pressed is achieved from the key property
//** document.addEventListener('keydown', function (e) {
//**   console.log(e.key);
//** });
// in the webpage console: f/y//Enter/Escape/...

// use the information to close the modal whenever esc key is pressed
// and check if the modal is open -> the modal open when is 'hidden' class is removed -> check if the 'hidden' class is removed -> check if the element has a certain class (modal.classList.contains('hidden'))
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  // if the pressed key is esc, and if the modal class doesn't contain hidden class, then execute the closeModal function to close the modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // execute the closeModal function
    closeModal();
  }
});
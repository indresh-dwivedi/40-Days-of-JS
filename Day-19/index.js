console.log("Day 19 - JavaScript Events");

// Event Handling in Markup
function handleClick(greeting) {
  console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function () {
  console.log("My Button 2 Clicked");
};

// Can not add multiple
myBtn2Elem.onclick = function () {
  console.log("My Button 2 Clicked Again");
};

// Separating fundtion
myBtn2Elem.onclick = handleClick;
myBtn2Elem.onclick = () => handleClick("Hii");

/* addEventListener and removeEventListener */

/*
const countBtnElem = document.getElementById("countBtn");

let counter = 0;
countBtnElem.addEventListener("click", function () {
  console.log("counter", counter);
  counter++;
});

countBtnElem.removeEventListener("click", function () {
  console.log("counter", counter);
  counter++;
});
*/

let counter = 0;
const countBtnElem = document.getElementById("countBtn");

const handleCount = function () {
  console.log(counter);
  counter++;
};
const greetMe = function () {
  console.log("Thank You!");
};

countBtnElem.addEventListener("click", handleCount);
countBtnElem.addEventListener("click", greetMe);
countBtnElem.removeEventListener("click", handleCount);

/* DOM Conetnt Loaded */

// will never run
document.onDOMContentLoaded = function () {
  console.log("DOM Content Loaded...");
};

// this will run
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded...");
});

/* Event Object */
const searchElem = document.getElementById("search-id");

function handleChange(event) {
  console.log(event);
  console.log("Target:", event.target);
  console.log("Target Name:", event.target.name);
  console.log("Target Value:", event.target.value);
  console.log("Event Type:", event.type);
  console.log("Current Target:", event.currentTarget);
  console.log("this:", this);
}
searchElem.addEventListener("change", handleChange);

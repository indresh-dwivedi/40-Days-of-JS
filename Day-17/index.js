console.log("Day 17 - Introduction to DOM");

// DOM Types

// 1. Document - Represents the entire page and it is the root node of the DOM tree.
console.log(document);

// 2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node.

// 3. Element - A specific type of node that represents HTML tags/elements

// 4. NodeList - An array of Nodes.
// 5. Attr - repesents the attribute of a node.
// <img src="/" alt="some image" />
// 6. NameNodeMap - A collection of Attr.

/* Accessing DOM Methods*/

//1. By id
let titleElem = document.getElementById("heading");
console.log(titleElem);

//2. By class
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);
console.log(infoElems[0], infoElems[1]);
[...infoElems].forEach((elem) => {
  console.log(elem);
});

//3. By tag name

let pTagElems = document.getElementsByTagName("p");
console.log(pTagElems);

// Selctors - Query Selector and Query Selector All

//4. Query Selector - querySelector() -> return first matching element

let para = document.querySelector("p.info");
console.log("using query selector", para);

//5. Query Selector All -> return a NodeList
let paras = document.querySelectorAll("p.info");
console.log("using query selector all", paras);

let hOne = document.querySelector("#heading");
console.log("using query selector", hOne);

// Mini Project - 1: Highlighter App

function highlightText() {
  console.log("About to highlight a text...");

  let elements = document.querySelectorAll("p.info");

  elements.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}

// Mini Project - 2: Search Items

function filterList() {
  const inputElem = document.getElementById("searchInput");
  const input = inputElem.value;

  const items = document.querySelectorAll("ul#itemList li");

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}


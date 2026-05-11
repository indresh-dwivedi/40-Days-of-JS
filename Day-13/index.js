"use strict";

console.log("Day 13: The this keyword");

// Global

// this keyword and window object
console.log("this at the global", this); // window

// object
// function

// Inside of an Object - Implicit Binding
// Implicit Binding -> Implicit Binding is a way in which you understand that if a method is call on a object using the .(dot) notation, the context of "this" is bound on an associated to the object on which we have invoke the method.
const emplpyee = {
  id: "A5778",
  firstName: "Indresh",
  lastName: "Dwivedi",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("Employee Id", emplpyee.id); // "A5778"
console.log("this inside the employee object", emplpyee.returnThis());

console.log("Constructed Full Name using this", emplpyee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };

  console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

// Inside Function
function sayName() {
  console.log("this inside a function", this); // window (if we use "use strict" then it's value is undefined).
}

sayName(); //

function outer(a) {
  console.log("this inside an outer function", this); // window (in strict mode, output is -> undefined)

  return function inner(b) {
    console.log("this inside an inner function", this); // window (in strict mode, output is -> undefined)
  };
}
const outerResult = outer(5);
outerResult(3);

// Inside the Arrow Function

const getFood = () => this;

console.log(
  "this inside the arrow function defined in global scope",
  getFood(),
);

const food = {
  name: "mango",
  color: "yellow",

  //getDesc: () => `${this.name} is ${this.color}`,
  /*
  getDesc: function () {
    return `${this.name} is ${this.color}`;
  },
  */
  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

const descFunc = food.getDesc();
console.log(descFunc());

// Explicit Binding - call, apply, bind

// The call method

function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: "Indresh Dwivedi",
  address: "All of YOU!",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " & " + hobby2);
};

const person = {
  name: "Indresh",
};

likes.call(person, "Coding", "Cricket");

// apply()

const hobbiesToApply = ["Learning", "Music"];

likes.apply(person, hobbiesToApply);

// bind()

const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

const officer = {
  name: "Isha",
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");

newFn();

// The new binding

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + " is a " + this.animal);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();


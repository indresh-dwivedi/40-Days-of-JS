console.log("Day 12 - JavaScript Objects");

// Object Literal..
let user = {
    name: "indresh",
    age: 26,
    "is admin": true
};

console.log(user.name); // indresh
console.log(user.age); // 26

console.log(user["is admin"]);

user.isSeniorCitizen = false;

user["cricket lover"] = true;
user["movie lover"] = false;

delete user["movie lover"]
console.log(user);


const someKey = "age";

console.log(user[someKey]); // 26

/*
let car = prompt("which is your favourite car?");

let favCars = {
    [car]: 5
}

console.log(favCars);
*/

// Object using Constructor Function

function Car(name, model) {
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);


// Object using new Object()

const person = new Object()
person.name = "monu";
person.age = 25;
console.log(person);


// Object using factory Function

function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(this.name); 
        }
    }
}

const user1 = createUser("Radha", 24);
console.log(user1);
user1.name;
user1.age;
user1.greet();
const user2 = createUser("Pari", 15);
console.log(user2);

// Nested Objects


let profile = {
    name: "indresh",
    company: "Google",
    message: function() {
        console.log(`${this.name} works at ${this.company}`);
    },
    address: {
        city: "Noida",
        pin: 201310,
        state: "Uttar Pradesh",
        country: "India",
        greeting: function() {
            console.log("Welcome to India");
        }
    }
}

// for ... in

for (let key in profile) {
    console.log(key);
    console.log(profile[key]);
}

console.log(Object.keys(profile));

console.log(profile.salary); // undefined

console.log("salary" in profile);

if (!profile.salary) {
    console.log("the salary property doesn't exist");
}


console.log(profile.address.country); // India
profile.address.greeting();
console.log(profile.name); // "indresh"
console.log(profile.company); // "Google"

profile.message();

// Object Reference

let fruit = { name: "mango"}; // XA01
const oneMoreFruit = { name: "mango"}; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit;

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true


// Static methods in Objects
// 1. Object.assign() 
const target = {p:1, q:2};
const source = {a:3, b:5};

const returnedObj = Object.assign(target, source);
console.log(returnedObj);


const obj = {name: "Indresh Dwivedi"};
const obj2 = Object.assign({}, obj);

console.log(obj2);
console.log(obj === obj2);


const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}
/*
obj4.b.c = 3;

obj4.a = 100;

console.log(obj4.a); // 100
console.log(obj3.a); // 1

console.log(obj4.b.c) // 3
console.log(obj3.b.c) // 3
*/

/* Object.assign create a shallow copy, for deep cloning, we use structuredClone*/


const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c) // 30
console.log(obj3.b.c) // 2

// 2. Object.entries() -> translate an object into an array.
const myObj = {
    a: "indresh",
    b: 32,
};

const myArr = Object.entries(myObj);
console.log(myArr)

// 3. Object.fromEntries() -> translate an array into a Object.
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries)
console.log(objEntries);

// 4.Object.freeze() -> freeze the value so you can not change. it is completely mutable so that you can't change anything or you can't add a new property.
const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;

console.log(emp)

console.log(Object.isFrozen(emp)); // true

// 5. Object.seal() -> with seal method you can not add or delete a new property but you can reassign the existant value.
const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name;

dept.name = "HR"
console.log(dept)

console.log(Object.hasOwn(dept, "address")) // false

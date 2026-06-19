// Arrays and Objects 2 minutes recap

/*
let obj = {}
obj.a = "";
obj.b = "b";
*/

/* Map in JavaScript */

// 1. key can be of any type
// 2. Map remembers the original order in which the elements were added to it

/*
const map = new Map([
    ['name', 'Google'],
    ['type', 'Company'],
    ['owner', 'Indresh Dwivedi']
]);

console.log(map);
*/

// How to Add values to a Map

// set(key, value)

// create a map
/*
const map = new Map();

map.set("name", "Microsoft");
map.set('type', 'software company');
map.set('owner', 'Indresh Dwivedi');
map.set('owner', 'Monu Dwivedi');

console.log(map);
*/
// How to Get values from a Map

// get(key)
/*
console.log("Type is", map.get('type'));
*/

// Map Keys

const funMap = new Map();

funMap.set(560, "My House Number");
funMap.set(true, "Yes, I love Programming");

let obj = {'name': 'Indresh'};
funMap.set(obj, true);

console.log(funMap);

// Create an empty object
const funObj = {};

funObj[560] = "My House Number";

console.log(funObj[560] === funObj['560']);

console.log(funMap.get(560) === funMap.get("560"));

// Map Properties and Methods

console.log(funMap.size); // 3

console.log(funMap.has(560)); // true

console.log(funMap.has(360)); // false

console.log(funMap.has("560")); // false

funMap.delete(560);
console.log(funMap);

funMap.clear();
console.log(funMap);


// MapIterator: keys(), values(), and entries()

const ageMap = new Map([
    ['Monu', 20],
    ['Radha', 14],
    ['Pari', 10],
    ['Raghav', 9]
]);

// Get all the keys

console.log(ageMap.keys());

const mitr = ageMap.keys();

mitr.forEach((item) => {
    console.log(item)
})

console.log(ageMap.values());

console.log(ageMap.entries());

/*
ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old!`);
});
*/

for(const [key, value] of ageMap) {
    console.log(`${key} is ${value} years old!`);
}


// Convert an Object into a Map

const address = {
  'Virat Kohli': 'India',
  'Kane Williamson': 'New Zealand',
  'Steve Smith': 'Australia'
};


const addressMap = new Map(Object.entries(address));
console.log(addressMap);

// Convert a Map into an Object

const address1 = Object.fromEntries(addressMap);
console.log(address1);

// Convert a Map into an Array

const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);

console.log(Array.from(map));

console.log([...map]);


/* Set in JavaScript */

// A Set is a collection of unique elements

const set = new Set();
console.log(set);

const fruiteSet = new Set(['🍉', '🍎', '🍈', '🍏']);
console.log(fruiteSet);

console.log(fruiteSet.size); // 4

const saladSet = new Set();

saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber

console.log(saladSet); // Set(4) {"🍅", "🥑", "🥕", "🥒"}

saladSet.add('🥒'); // can not added because it is a duplicate value

console.log(saladSet);

console.log('Does the salad have a carrot?', saladSet.has('🥕')); // true

console.log('Does the salad have broccoli?', saladSet.has('🥦')); // false

saladSet.delete('🥑');

console.log(saladSet);

saladSet.clear();
console.log(saladSet);


// How to Iterate Over a Set

const houseNos = new Set([360, 567, 101]);

houseNos.values(); // SetIterator

houseNos.keys(); // SetIterator

console.log(houseNos.entries()); // SetIterator

// How to Convert a Set into an array

const houseNoArr = [...houseNos];
console.log(houseNoArr);

const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];

const mixedFruitSet = new Set(mixedFruit);

console.log(mixedFruitSet);

// Create a person object
let person = {
   'name': 'Isha',
   'age': 27
};

// Create a set and add the object to it
const pSet = new Set();
pSet.add(person);
console.log(pSet);

// person.name = "Monu"

person = {};

pSet.add(person);

/* Set Theories */

const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

// Union
console.log(first.union(second));

const union = new Set([...first, ...second]); // this is the way we used before
console.log(union);

// Intersection
console.log(first.intersection(second));

const intersection = new Set([...first].filter(elem => second.has(elem))); 
console.log(intersection);

// Difference
console.log(first.difference(second));

const difference = new Set([...first].filter(elem => !second.has(elem))); 
console.log(difference);


const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);

console.log(numbers.isSupersetOf(the4Table)); // true

/* WeakMap */

let user = {'name': 'indresh'};
// const allUsers = [user];

const uMap = new Map();
uMap.set(user, true);

user = null;

console.log(uMap);


let addr = {"country": "India"};

const wMap = new WeakMap();
wMap.set(addr, true);

addr = null;

console.log(wMap);

// set
// get
// has
// delete

const metadata = new WeakMap();

function setMetadata(el, info) {
    metadata.set(el, info);
}

function getMetadata(el) {
    return metadata.get(el);
}

const div = document.createElement('div');
setMetadata(div, { visible: true });

console.log(getMetadata(div)); // { visible: true }

// If div is removed from the DOM and dereferenced, metadata is GC'd

// add
// has
// delete

const onlineUsers = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

onlineUsers.add(user1);
onlineUsers.add(user2);
console.log(onlineUsers.has(user1));

user1 = null;

console.log(onlineUsers.has(user1));

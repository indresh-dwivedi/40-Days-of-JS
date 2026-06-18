console.log("Learning Modules...");

import { sum, sub } from "./calc.js";
//import { default as sayMyName } from "./whoAmi.js";

import sayMyName from "./whoAmi.js";

console.log(sum(2, 3));
console.log(sub(8, 3));

console.log(sayMyName());

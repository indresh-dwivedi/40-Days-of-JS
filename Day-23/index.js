console.log("JavaScript - Promises");

/*
let promise = new Promise(function(resolve, reject){

});
*/

// Executor -> this executor function placed inside the promise constructor.
/*
function(resolve, reject) {
    // Logic goes here
    resolve()
    reject()
    resolve()
}
*/

// 3 state in promise-
/*
pending: Initially when the executor function starts the execution.
fulfilled: When the promise is resolved.
rejected: When the promise is rejected.
*/

// result -
/*
undefined: Initially when the state value is pending.
value: When resolve(value) is called.
error: When reject(error) is called.
*/

// - How promises are resolved and rejected
/*
let promise1 = new Promise(function (resolve, reject) {
    resolve("Hey, I am done!");
});

let promise2 = new Promise(function (resolve, reject) {
    reject("Something is not right!");
});


let anotherPromise = new Promise(function (resolve, reject) {
    resolve("I am surely going to get resolved!");

    reject(new Error("Will this be ignored?")); // ignored
    resolve("Ignored?"); // ignored
});
*/

/* - Handling Promises - */

// .then()
// .catch()
// .finally()
let loading = false;
const promise = new Promise(function(resolve, reject) {

    loading = true;
    // make a network call(API Call/ IO Operation)
    resolve("I am resolved...")
});

promise
    .then(
        (result) => {console.log(result)}
    )
    .catch(
        (error) => {console.log(error)}
    )
    .finally(
        () => {
        loading = false;
    }
);

/* - Promise Chain - */

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

// Rule 2: You can do mainly three valuable things from the .then() method.
// (1) You can return another promise(for async operation).
// (2) You can return any other value from a synchronous operation.
// (3) Lastly, you can throw an error.

// Return a promise from the .then() handler


// Create a Promise
let getUser = new Promise(function(resolve, reject) {
    const user = {
        name: 'Indresh Dwivedi',
        email: 'indresh@gmail.com',
        password: 'indresh.password',
        permissions: [ 'db', 'hr', 'dev']
    };
    resolve(user);
});

getUser.then(function(user) {
    console.log(`Got User ${user.name}`);
    
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Noida')
        }, 2000)
    })
}).then((address) => {
    console.log(`User Address is ${address}`);
});

// Return a simple value from the .then() handler

getUser
.then(function(user) {
    console.log(`Got User ${user.name}`);
    return user.email;
})  
.then(function(email) {
    console.log(`User Email is ${email}`);
})

// Throw an error from the .then() handler


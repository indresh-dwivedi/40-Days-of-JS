console.log("Async JavaScript - Callback");
/*
console.log("Start"); // Synchronous
setTimeout(() => {
    console.log("Waiting Done!");   
}, 2000); // Asynchronous
console.log("End"); // Synchronous
*/

// - callback

/*
function fn(arg) {
    arg();
}

fn(function() {
    console.log("hello")
})
*/

function greet(name, callback) {
    console.log(`Hi ❤️ ${name}`);
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("I am still hanging here")
}

function sayBye() {
    console.log("Bye");
}

greet("Indresh Dwivedi", sayBye);

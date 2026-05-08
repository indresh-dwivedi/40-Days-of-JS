console.log("Day-11 - Closure");

function outer() {
    let x = 10;

    return function inner() {
        console.log(x);  
    }

}

const func = outer();
console.log(func());

//..........
function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count); 
    }
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2
retVal(); // 3


// Real World Example

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        "deposite" : (amount) => {
            balance = balance + amount;
            console.log("Deposited ", amount,"Current Balance ", balance);
        },

        "withdraw" : (amount) => {
            if (amount > balance) {
                console.warn("Insufficient Fund")
            }
            else {
                balance = balance - amount;
                console.log("withdrawn ", amount, "Current Balance ", balance);
            }
        },

        "checkBalance" : () => console.log("Current Balance", balance),

    };

}

const indreshDwivediAccount = createBankAccount(100);


console.log(indreshDwivediAccount);

console.log(indreshDwivediAccount.deposite(300)); //400

console.log(indreshDwivediAccount.withdraw(50)); // 350

console.log(indreshDwivediAccount.withdraw(100)); // 250


console.log(indreshDwivediAccount.checkBalance()); // 250


//.........
function dealingWithBigData() {
    let bigData = new Array(10000000).fill("*")

    return function() {
        console.log(bigData[3])
    }
}

const variable12 = dealingWithBigData();

console.log(variable12())


// Usefulness of Closure
/*
1. You can keep the variables private without exposing them.
2. You can stop variable pollution.
3. You can create a function factory.
4. You can keep a variable alive between multiple calls.
*/

function timer() {
    let secs = 0;

    return function() {
        secs++;
        console.log("elaspsed seconds ", secs)
    }
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3

// Closure in Event handler

function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton();

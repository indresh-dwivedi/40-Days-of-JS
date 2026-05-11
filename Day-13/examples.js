console.log("**** Examples ****");

const user = {
  name: "Indresh",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user.greet();

const obj = {
  name: "Isha",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;

greetFn.call(obj);

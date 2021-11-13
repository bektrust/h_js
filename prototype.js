const person = {
  name: "Maxim",
  age: 50,
  greet: function () {
    console.log("Greet!");
  },
};

// const person = new Object({
//   name: "Maxim",
//   age: 50,
//   greet: function () {
//     console.log("Greet!");
//   },
// });

person.greet();

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

person.sayHello();

const lena = Object.create(person);

console.log(lena.name);

lena.name = "Elena";
console.log(lena.name);

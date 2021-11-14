function hello() {
  console.log("Hello!", this);
}

const person = {
  name: "Aibek",
  age: 50,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(this.name);
    console.log(this.age);
    console.log(`job is: ${job}`);
    console.log(`phone is: ${phone}`);
    console.groupEnd;
  },
};

// person.sayHelloWindow();
// person.logInfo();

const lena = {
  name: "Elena",
  age: 23,
};

// person.logInfo.bind(lena)();
// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog("Frontend", "+996-555-65-45-65");

// const fnLenaInfoLog = person.logInfo.bind(
//   lena,
//   "Frontend",
//   "+996-555-65-45-65"
// );
// fnLenaInfoLog();

// person.logInfo.call(lena, "Frontend", "+996-555-65-45-65");

// person.logInfo.apply(lena, ["Frontend", "+996-555-65-45-65"]);

//==============

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }
//
// console.log(multBy(array, 2));

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2));

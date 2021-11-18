// function createCal(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
//
// const calc = createCal(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
//
// console.log(addOne(4));
// console.log(addTen(42));

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
//
// const comUrl = createUrl("com");
// const ruUrl = createUrl("ru");
//
// console.log(comUrl("google"));
// console.log(ruUrl("mail"));

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Micael", age: 40, job: "Frontend" };
const person2 = { name: "Helena", age: 25, job: "Backend" };

bind(person1, logPerson)();
bind(person2, logPerson)();

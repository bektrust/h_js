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

function createUrl(domain) {
		return function (url) {
				return `https://${url}.${domain}`
			}
	}

const comUrl = createUrl('com')
const ruUrl = createUrl('ru')

const 

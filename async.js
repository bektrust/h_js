console.log("Start");
console.log("Start 2");

function setTimeOut2Sec() {
  console.log("Inside timeout after 2 sec");
}

window.setTimeout(() => {
  console.log("Inside timeout after 5 sec");
}, 5000);

console.log("End");

setTimeout(setTimeOut2Sec, 2000);

// console.log("Request data...");
//
// setTimeout(() => {
//   console.log("Preparing data");
//
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };
//
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 5000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//
//     resolve(backendData);
//   }, 2000);
// });
//
// p.then((data) => {
//   return new Promise((reolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       reject(data);
//       // reolve(data);
//     }, 2000);
//   })
//     .then((clientData) => {
//       console.log("Data recsived", clientData);
//       clientData.FromPromise = true;
//       return clientData;
//     })
//     .then((data) => {
//       console.log("Modified", data);
//     })
//     .catch((err) => console.error("Error: ", err))
//     .finally(() => {
//       console.log("Finaly");
//     });
// });

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// sleep(2000).then(() => {
//   console.log("After 2 sec");
// });
// sleep(3000).then(() => console.log("After 3 sec"))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promise");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promise");
});

console.log(0);

const ham = async () => {
  let stdin = process.openStdin();

  let promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('done!'), 1000);
    stdin.addListener('data', d => {});
    process.exit(0);
  });

  let result = await promise;

  console.log('awaited');
};

ham();
// ham().then(() => console.log(2));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   let result = await promise; // wait till the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

const p5 = Promise.resolve(100);

p5.then((result) => {
  console.log(`result is ${result}`);
});

console.log(1);

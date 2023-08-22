import { readFile } from "fs/promises";

const pFoo = readFile("foo.txt", "utf8");
const pBar = readFile("foo.txt", "utf8");
const pBaz = readFile("foo.txt", "utf8");

const p6 = Promise.all([pFoo, pBar, pBaz]);

p6.then((results) => {
  const [foo, bar, baz] = results;
  console.log("foo", foo);
  console.log("bar", bar);
  console.log("baz", baz);
});

const p6_2 = Promise.race([pFoo, pBar, pBaz]);
p6_2.then((result) => {
  console.log(result);
});

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p6_3 = Promise.race([readFile("foo.txt", "utf8"), sleepReject(5000)]);

p6_3.then((result) => {
  console.log("成功", result);
}),
  (error: unknown) => {
    console.log("失敗", error);
  };

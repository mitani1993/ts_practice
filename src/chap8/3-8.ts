import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");
const p2 = p.then((result) => result + result);

p2.then((result) => {
  console.log(result);
});

const p3 = p.catch(() => "");

p3.then((result) => {
  console.log(result);
});

readFile("foo.txt", "utf8")
  .finally(() => {
    console.log("foo.txt is loaded?");
  })
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });

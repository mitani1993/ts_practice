class User {
  name?: string;
  readonly age: number = 0;
}

const uhyo = new User();
console.log(uhyo.name);
uhyo.name = "うひょ";
console.log(uhyo.name);

console.log(uhyo.age);

class User<T> {
  name: string;
  private age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.age = age;
    this.data = data;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User<string>("uhyo", 26, "追加データ");
console.log(uhyo);

const john = new User("John", 15, { num: 123 });
console.log(john);

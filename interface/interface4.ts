interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`hello, my name is ${this.name}`);
  }
}

const aaa: IPerson1 = new Person("Mark");
aaa.hello();

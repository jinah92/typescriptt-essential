interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Mark",
  age: 39,
  hello: function (): void {
    console.log(`my name is ${this.name}`);
  },
};
const p42: Person4 = {
  name: "Mark",
  age: 39,
  hello(): void {
    console.log(`my name is ${this.name}`);
  },
};

/*
const p43: Person4 = {
  name: "Mark",
  age: 39,
  hello(): (): void => {
    console.log(`my name is ${this.name}`);  // arror function에서는 Person4(this)를 가르킬 수 없음
  },
};
*/

p41.hello();
p42.hello();

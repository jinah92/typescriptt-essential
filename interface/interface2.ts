interface Person2 {
  name: string;
  age?: number; // optional Property (1)
}

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // optional Property (2) ==> 어떤 이름의 property든 ok
}

function hello2(person: Person2): void {
  console.log(`안녕하세요. ${person.name}입니다!`);
}

function hello3(person: Person3): void {
  console.log(`안녕하세요. ${person.name} 입니다!`);
}

hello2({ name: "Mark", age: 39 });
hello2({ name: "Anna" });

const p31: Person3 = {
  name: "Mark",
  age: 39,
};

const p32: Person3 = {
  name: "Anna",
  systers: ["Sung", "Chan"],
};

const p33: Person3 = {
  name: "Bokk",
  father: p31,
  mother: p32,
};

hello3(p31);
hello3(p32);
hello3(p33);

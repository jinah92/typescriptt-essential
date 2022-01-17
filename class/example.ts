class MyPerson {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class MyPerson2 {
  public readonly name: string = "Mark";
  private readonly country: string;
  //   private readonly country: string = "Kor";

  public constructor(private _name: string, private age: number) {
    this.country = "Kor"; // no error
  }

  get name() {
    // console.log("get");
    return this._name + " Choi";
  }

  set name(n: string) {
    // 리턴할 필요 없음
    console.log("set");
    this._name = n;
  }

  hello() {
    this.country = "new"; // readonly props (compile error)
  }
}

class MyPerson3 {
  public name: string = "Mark";
  private _age!: number; // private은 _로 붙여서 표현 (코드컨벤션)

  public constructor(age: number) {
    if (age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }

  public async init() {}
}

const per1 = new MyPerson("Mark");

const per2 = new MyPerson2("a", 20);
const per3 = new MyPerson2("b", 30);
const per4 = new MyPerson3(20);

console.log(per1);
console.log(per2);

// per2.age = 20;
console.log(per2.age);
console.log(per3.age);

console.log(per2.age);

console.log(per2.name); // get을 사용하는 함수 (getter)
per2.name = "jinah"; // set을 사용하는 함수 (setter)
console.log(per2.name);

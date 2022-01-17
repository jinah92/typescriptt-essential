// 상속
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}, 나이는 ${this._age}`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

const p = new Parent("Mark", 30);
p.print();

// 상속
class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    super("Mark 2", age); // 부모의 생성자를 호출
    this.printName(); // 부모의 메서드 호출은, 반드시 super 호출 후에 실행해야 한다
  }
}

const child = new Child(5);
child.print();

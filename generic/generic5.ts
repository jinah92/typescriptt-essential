class NewPerson<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}
class NewPerson2<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new NewPerson("Mark");
new NewPerson<string>(39); // compile err (인자가 string 타입이 아님)

new NewPerson2<string, number>("Mark", 30);

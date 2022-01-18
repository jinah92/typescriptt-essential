class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Marks");
new PersonExtends(30);
new PersonExtends(true); //compile error

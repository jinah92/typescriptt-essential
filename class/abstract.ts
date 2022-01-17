abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

// new AbstractPerson()

class HelloPerson extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p10 = new HelloPerson();
p10.setName();

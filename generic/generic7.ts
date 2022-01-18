interface IPerson {
  name: string;
  age: number;
}

// keyof
type Keys = keyof IPerson;

const keys: Keys = "age";
// const keys: Keys = "name";

const person10: IPerson = {
  name: "Mark",
  age: 39,
};

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProps<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProps<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

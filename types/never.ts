// never 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있다
// never에는 어떤 것도 할당할 수 없다 (any도 never에 할당할 수 없다)
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed!");
}

function infiniteLoop(): never {
  while (true) {}
}

declare let a: string | number;

if (typeof a !== "string") {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

const b: Indexable<{}> = ""; // compile err

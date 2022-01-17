interface HelloPerson {
  (name: string, age?: number): void;
}

// age에 ?가 없으면 컴파일 에러  (인터페이스와 구현체의 타입이 일치하지 않음)
const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`my name is ${name}`);
};

helloPerson("Mark", 30);

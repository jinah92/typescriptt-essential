// unknown: 모르는 변수의 타입을 묘사하는 경우에 사용
// Typescript 3.0 부터 지원
// any 보다 Type-safe한 타입
//      - 아무거나 할당할 수 있다
//      - 컴파일러가 타입을 추론하게끔 타입의 유혀을 좁히거나
//      - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다
// 사용전에 데이터 유형 검사가 필요한 API 사용이 가능할 것..

declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe; // type guard
  //   const aString: string = maybe; // 할당 불가
}

if (typeof maybe === "string") {
  const aString: string = maybe; // typeof guard
}

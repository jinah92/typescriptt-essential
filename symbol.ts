// ECMAScript 2015
// Symbol 함수를 사용해서 symbol 타입을 만들어 낼 수 있다

// 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만들어 준다 (주로 접근 제어 시 사용)

console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];

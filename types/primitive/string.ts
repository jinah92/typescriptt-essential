let myName: string = "Mark";

myName = "Anna";

// Template String : 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 백틱 기호에 둘러 쌓여있음
// 포함된 표현식은 `${expr}` 형태로 사용

let fullName: string = "Mark Lee";
let age: number = 39;
let sentence: string = `Hello, My name is ${fullName} and my age is ${age}`;
console.log(sentence);

type HelloFunctionGeneric1 = <T>(message: T) => T;
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

// 구현체 작성
const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};
const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};

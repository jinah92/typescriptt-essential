function helloBasic<T>(message: T): T {
  return message;
}
function helloBasic2<T, U>(message: T, comment: U): T {
  return message;
}

// 파라미터 타입을 지정하는 방식
helloBasic<string>("Mark");
helloBasic2<string, number>("Mark", 39);

// 타입이 추론됨
helloBasic(36);
helloBasic2(36, 39);

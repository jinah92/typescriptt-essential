// any : 어떤 타입이어도 상관없는 타입
// 최대한 쓰지 않는 것이 좋다
// noImplicitAny: 컴파일 옵션 중 하나, any를 써야하는데 쓰지 않으면 오류를 뱉게 함
// any는 개체(objects)를 통해 전파된다

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("아무거나 리턴해");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // compile err가 나지 않음!

function leakingAny(obj: any) {
  const a: number = obj.num; // any leaking
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
c.indexOf("0"); // compile err

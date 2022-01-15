function returnVoid(message: string) {
  console.log(message);
  return undefined; // void에 유일하게 undefined 할당 가능
}

const returnData = returnVoid("no return");

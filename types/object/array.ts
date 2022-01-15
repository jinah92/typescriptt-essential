// 자바스크립트에서 array는 객체

// 어노테이션 선언방식 (방법 1을 선호)
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// let list3: number[] = [1, 2, 3, '4'] // compile err
let list3: (number | string)[] = [1, 2, 3, "4"];

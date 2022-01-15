let x: [string, number];

// 순서, 타입, 길이가 맞아야 함
x = ["hello", 30];

x = [10, "Mark"]; // compile err
x[2] = "world"; // 초과된 인덱스에 대한 대입 (compile err)

const person: [string, number] = ["Mark", 30];

const [first, second, third] = person; // 분해 할당 (thrid: compile err)

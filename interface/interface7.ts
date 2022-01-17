interface Person8 {
  name: string;
  age?: number;
  readonly gender: string; // 수정 불가
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

p81.gender = "female"; // compile error

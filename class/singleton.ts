class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 있으면 그걸 리턴
    // 없으면 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
}

const cs1 = ClassName.getInstance();
const cs2 = ClassName.getInstance();

console.log(cs1 === cs2); // 동일한 object

class Students {
  // mark: string = 'male'
  [index: string]: "male" | "female";

  mark: "male" = "male"; // 고정 property
}

const aBan = new Students();
aBan.mark = "male";
aBan.jade = "male";

console.log(aBan);

const bBan = new Students();
bBan.chloe = "female";
bBan.alex = "male";
bBan.anna = "female";

console.log(bBan);

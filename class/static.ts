// static Properties & Methods
class StaticPerson {
  private static CITY = "Seoul";
  //   public static hello() {
  //     console.log("hello!", StaticPerson.CITY);
  //   }
  public hello() {
    console.log("hello!", StaticPerson.CITY);
  }
  public change() {
    StaticPerson.CITY = "LA";
  }
}

const sp1 = new StaticPerson();
const sp2 = new StaticPerson();
sp1.hello();

sp2.hello();
sp1.change();
sp2.hello();

// StaticPerson.hello();
// StaticPerson.CITY;

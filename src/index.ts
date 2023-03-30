console.log("ts is running");
console.log("ts is running again");

class User {
  email: string; //fields are authomatically marked as public unless specified as private
  name: string;
  private city: string = "";
  readonly state: string = "Texas";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const mido = new User("mido@codeup.com", "mido");
// mido.state = "OK";     - cant be changed because it is read only
//mido.city = ""        - cant be assessed out of class because it is private

//classes can be created without asigning the fields with the 'this' key word in the constructor;
class Person {
  readonly city: string = "";
 protected age: number = 10;

  constructor(private email: string, name: string, userId: number) {}

  //getters in ts
  get getAge(): number {
    return this.age;
  }
  get getName(): string {
    return `my name is ${this}`;
  }

  //setters in ts
  //setters should have no return type
  set setAge(age: number) {
    this.age = age;
  }



}
const bila: Person = new Person("bila@codeup.com", "bila", 1123334);




//classes can not assess private properties of parent classes but they can assess fields marked as protected

class subUser extends  Person {
    isFamily: boolean = false;
    changeAge(): void {
        this.age = 5
    }
}
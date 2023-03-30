"use strict";
console.log("ts is running");
console.log("ts is running again");
class User {
    constructor(email, name) {
        this.city = "";
        this.state = "Texas";
        this.email = email;
        this.name = name;
    }
}
const mido = new User("mido@codeup.com", "mido");
// mido.state = "OK";     - cant be changed because it is read only
//mido.city = ""        - cant be assessed out of class because it is private
//classes can be created without asigning the fields with the 'this' key word in the constructor;
class Person {
    constructor(email, name, userId) {
        this.email = email;
        this.city = "";
        this.age = 10;
    }
    //getters in ts
    get getAge() {
        return this.age;
    }
    get getName() {
        return `my name is ${this}`;
    }
    //setters in ts
    //setters should have no return type
    set setAge(age) {
        this.age = age;
    }
}
const bila = new Person("bila@codeup.com", "bila", 1123334);
//classes can not assess private properties of parent classes but they can assess fields marked as protected
class subUser extends Person {
    constructor() {
        super(...arguments);
        this.isFamily = false;
    }
    changeAge() {
        this.age = 5;
    }
}

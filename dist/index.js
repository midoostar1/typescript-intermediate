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
// mido.state = "OK";      cant be changed because it is read only
//mido.city = ""        cant be assessed out of class because it is private

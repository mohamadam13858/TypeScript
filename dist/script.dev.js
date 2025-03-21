"use strict";
class User {
    constructor(id, email, phonenumber, password) {
        this.id = id;
        this.email = email;
        this.phonenumber = phonenumber;
        this.password = password;
        this.roles = [];
    }
    print() {
        console.log("email user is:" + this.email);
    }
    addRole(role) {
        this.roles.push(role);
    }
    showRoles() {
        console.log(this.roles.length);
        console.log(this.roles);
    }
}
class AdminUser extends User {
    constructor(adminpanelpermission) {
        super(12, "jfkjd", 5949979, "dljfjd");
        this.adminpanelpermission = adminpanelpermission;
    }
    addRole(role) {
        if (role === "Admin") {
            return;
        }
        this.roles.push(role);
    }
}
const User1 = new User(1, "mohamadhiohe", 664644, "djijggjd;ksj");
const adminUser = new AdminUser(true);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phras) {
        console.log(phras + " " + this.name);
    }
}
const uuuser = new Person("mohamad", 55);
uuuser.greet("jfjfjfj");
// let user1 : Person
// user1 = {
//     name:"ali gholami" ,
//     age:55 ,
//     greet(phras){
//     }
// }
// console.log(user1);

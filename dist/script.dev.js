"use strict";
class User {
    constructor(e, pn, pass) {
        this.email = e;
        this.phonenumber = pn;
        this.password = pass;
    }
    print() {
        console.log("email user is:" + this.email);
    }
}
const firstUser = new User("mohamadhiohe", 664644, "djijggjd;ksj");
firstUser.print();
const firstusercopy = { email: "sad", phonenumber: 8499, password: "jfkd", print: firstUser.print, };
firstusercopy.print();

"use strict";
class User {
    constructor(e, pn, pass) {
        this.email = e;
        this.phonenumber = pn;
        this.password = pass;
    }
}
const firstUser = new User("mohamadhiohe", 664644, "djijggjd;ksj");
const secondUser = new User("kjkjj", 85585, "dlhjfhf");
console.log(firstUser);
console.log(secondUser);

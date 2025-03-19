class User {
    email: string;
    phonenumber: number;
    password: string;

    constructor(e: string, pn: number, pass: string) {
        this.email = e;
        this.phonenumber = pn;
        this.password = pass;
    }

    print(this: User) {
        console.log("email user is:" + this.email);
    }
}

const firstUser = new User("mohamadhiohe", 664644, "djijggjd;ksj");

firstUser.print()

const firstusercopy = {email:"sad" , phonenumber:8499, password:"jfkd",  print: firstUser.print, }

firstusercopy.print()


class User {
    email: string;
    phonenumber: number;
    password: string;

    constructor(e: string, pn: number, pass: string) {
        this.email = e;
        this.phonenumber = pn;
        this.password = pass;
    }

}

const firstUser= new User("mohamadhiohe" , 664644 , "djijggjd;ksj");

const secondUser = new User("kjkjj" , 85585 , "dlhjfhf")

console.log(firstUser);
console.log(secondUser);



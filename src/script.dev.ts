class User {
    public email: string;
    phonenumber: number;
    password: string;
    private roles: string[] = []

    constructor(e: string, pn: number, pass: string) {
        this.email = e;
        this.phonenumber = pn;
        this.password = pass;
    }

    print(this: User) {
        console.log("email user is:" + this.email);
    }

    addRole(role:string){
      this.roles.push(role)
    }

    showRoles(){
        console.log(this.roles.length)
        console.log(this.roles);
    }
}

const User1 = new User("mohamadhiohe", 664644, "djijggjd;ksj");


User1.addRole("admin")
User1.addRole("mohamad")
// User1.roles[1] = "blogger"
User1.showRoles()

User1.email="jfjfjf"

// console.log(User1);


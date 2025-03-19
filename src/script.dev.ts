class User {

    private roles: string[] = []

    constructor(
        private id: number,
         public email: string,
          public phonenumber: number,
           public password: string) {}

    print(this: User) {
        console.log("email user is:" + this.email);
    }

    addRole(role: string) {
        this.roles.push(role)
    }

    showRoles() {
        console.log(this.roles.length)
        console.log(this.roles);
    }
}

const User1 = new User(1, "mohamadhiohe", 664644, "djijggjd;ksj");


User1.addRole("admin")
User1.addRole("mohamad")
// User1.roles[1] = "blogger"
User1.showRoles()

User1.email = "jfjfjf"

// console.log(User1);


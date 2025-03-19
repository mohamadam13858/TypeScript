class User {

    protected roles: string[] = []

    constructor(
        private id: number,
        public email: string,
        public phonenumber: number,
        public password: string) { }

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
class AdminUser extends User {

    constructor(public adminpanelpermission: boolean) {
        super(12, "jfkjd", 5949979, "dljfjd");

    }


    addRole(role: string) {
        if (role === "Admin") {
            return ;
        }
        this.roles.push(role)
        
    }
}

const User1 = new User(1, "mohamadhiohe", 664644, "djijggjd;ksj");
const adminUser = new AdminUser(true);

console.log(User1);
console.log(adminUser);



User1.addRole("Admin")
User1.addRole("mohamad")
// User1.roles[1]= "blogger"
User1.showRoles()

User1.email = "jfjfjf"

// console.log(User1);



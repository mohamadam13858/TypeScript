class Department {

    protected employees: string[] = []
    constructor(private readonly id: string, public name: string) {

    }

    describe() {
        console.log(`department ${this.id} : ${this.name}`);

    }

    addEmployee(employees: string) {
        this.employees.push(employees)
    }

    printEmployeeInfo() {
        console.log(this.employees);
    }
}


class ItDepartment extends Department{
    admins : string[]

    constructor(id : string ,admins: string[]){
        super(id , "dkdk")
       this.admins = admins
    }
}

class AccountingDepartment extends Department{
    constructor(id: string , private reports: string[]){
        super(id , "kdkdd");
    }

    addReport(text:string){
        this.reports.push(text)
    }
    printReports(){
        console.log(this.reports);
    }
}

const department = new Department('dk' , 'department')

department.addEmployee("111111")
department.addEmployee("222222")

department.printEmployeeInfo()

const accounting = new AccountingDepartment('2' , [])


accounting.addReport('sumjoifwihjg')

accounting.printReports()
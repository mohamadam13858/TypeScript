class Department {

    protected employees: string[] = []
    constructor(private readonly id: string, public name: string) {

    }

    static createEmployee(name:string){
        return {name: name}
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


class ItDepartment extends Department {
    admins: string[]



    constructor(id: string, admins: string[]) {
        super(id, "dkdk")
        this.admins = admins
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;


    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report")
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("pleeeeeeeeeeeeeeeeee")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, "kdkdd");
        this.lastReport = reports[0]

    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}



const department = new Department('dk', 'department')

department.addEmployee("111111")
department.addEmployee("222222")

department.printEmployeeInfo()

const accounting = new AccountingDepartment('2', [])

accounting.mostRecentReport = "mohamdggggg"
accounting.addReport('sumjoifwihjg')

accounting.printReports()


console.log(accounting.mostRecentReport);


var variable: string;


variable = "something"

console.log(variable);

console.log(Department.createEmployee('mohamad habibi'));

       
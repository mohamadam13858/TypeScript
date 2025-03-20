abstract class Department {

    protected employees: string[] = []
    constructor(private readonly id: string, public name: string) {

    }

    static createEmployee(name:string){
        return {name: name}
    }

    abstract describe():void;

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
    describe(): void {
        
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

    describe(){
        console.log('26245848464456245894564894');  
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}






const accounting = new AccountingDepartment('2', [])

accounting.mostRecentReport = "mohamdggggg"
accounting.addReport('sumjoifwihjg')

accounting.printReports()


console.log(accounting.mostRecentReport);


var variable: string;


variable = "something"

console.log(variable);

console.log(Department.createEmployee('mohamad habibi'));

       
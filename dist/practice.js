"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`department ${this.id} : ${this.name}`);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, "dkdk");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("pleeeeeeeeeeeeeeeeee");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "kdkdd");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const department = new Department('dk', 'department');
department.addEmployee("111111");
department.addEmployee("222222");
department.printEmployeeInfo();
const accounting = new AccountingDepartment('2', []);
accounting.mostRecentReport = "mohamdggggg";
accounting.addReport('sumjoifwihjg');
accounting.printReports();
console.log(accounting.mostRecentReport);
var variable;
variable = "something";
console.log(variable);

"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
    describe() {
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
    static getInstance() {
        if (AccountingDepartment.istance) {
            return this.istance;
        }
        this.istance = new AccountingDepartment("mohamad", []);
    }
    describe() {
        console.log('26245848464456245894564894');
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
// const accounting = new AccountingDepartment('2', [])
const accountingg = AccountingDepartment.getInstance();
accountingg === null || accountingg === void 0 ? void 0 : accountingg.addReport('sumjoifwihjg');
accountingg === null || accountingg === void 0 ? void 0 : accountingg.printReports();
var variable;
variable = "something";
console.log(variable);
console.log(Department.createEmployee('mohamad habibi'));

type Admin = {
    name: string,
    phoneNumber: number,
}


type Employee = {
    name: string,
    startDate: Date
}


type AdminedEmployee = Admin & Employee;

const e1: AdminedEmployee = {
    name: "mohamad",
    phoneNumber: 9138949241,
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;



function addParamter(a: combineble, b: combineble) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b
    }
}


type unknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: unknownEmployee) {
    console.log('name' + emp.name);
    if ('startDate' in emp) {
        console.log('start date is' + emp.startDate);
    }

    if ("phoneNumber" in emp) {
        console.log(emp.phoneNumber);
    }



}
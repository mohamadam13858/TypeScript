"use strict";
const e1 = {
    name: "mohamad",
    phoneNumber: 9138949241,
    startDate: new Date()
};
function addParamter(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
}
function printEmployeeInfo(emp) {
    console.log('name' + emp.name);
    if ('startDate' in emp) {
        console.log('start date is' + emp.startDate);
    }
    if ("phoneNumber" in emp) {
        console.log(emp.phoneNumber);
    }
}

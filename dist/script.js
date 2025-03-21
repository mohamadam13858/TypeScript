"use strict";
const e1 = {
    name: "mohamad",
    phoneNumber: 9138949241,
    startDate: new Date()
};
function addParamter(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addParamter('mohamad', 'hashemi');
result.split('');
function printEmployeeInfo(emp) {
    console.log('name' + emp.name);
    if ('startDate' in emp) {
        console.log('start date is' + emp.startDate);
    }
    if ("phoneNumber" in emp) {
        console.log(emp.phoneNumber);
    }
}
class Car {
    drive() {
        console.log("driving");
    }
}
class Truck {
    drive() {
        console.log("driving");
    }
    loadCargo(amount) {
        console.log(amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if (vehicle instanceof Truck) {
    //     vehicle.loadCargo(2000)
    // }
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(2000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
}
moveAnimal({
    type: "horse",
    runningSpeed: 200
});
// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('para')
// const userInput = <HTMLInputElement> document.getElementById("ff")
const userInput = document.getElementById("ff");
userInput.value = 'hi there...';

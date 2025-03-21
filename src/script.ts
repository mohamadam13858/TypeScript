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



class Car {
    drive() {
        console.log("driving");

    }

}
class Truck {
    drive() {
        console.log("driving");

    }
    loadCargo(amount: number) {
        console.log(amount);
    }
}


type Vehicle = Car | Truck

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // if (vehicle instanceof Truck) {
    //     vehicle.loadCargo(2000)
    // }


    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(2000)
    }
}




interface Bird {
    type: "bird",
    flyingSpeed: number
}


interface Horse {
    type: "horse"
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {

    let speed

    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;

            break;
        case "horse":

            speed = animal.runningSpeed

            break;
    }

}

moveAnimal({
    type: "horse",
    runningSpeed: 200
})
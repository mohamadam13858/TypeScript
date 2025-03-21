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


// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

type Combinable = string | number;

function addParamter(a: string , b: string) : string
function addParamter(a: number , b: number) : number
function addParamter(a: string , b: number) : string
function addParamter(a: number , b: string) : string
function addParamter(a: combineble, b: combineble) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString()
    }

    return a + b
}


const result = addParamter('mohamad' , 'hashemi')

result.split('')



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

// const paragraph = document.querySelector('p');



// const paragraph = document.getElementById('para')


// const userInput = <HTMLInputElement> document.getElementById("ff")


const userInput = document.getElementById("ff") as HTMLInputElement;

userInput.value = 'hi there...'



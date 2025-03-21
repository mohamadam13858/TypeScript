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

// const Logger = (logString: string) => {

//     return function (constructor: Function) {
//         console.log(constructor);
//         console.log(logString);

//     }
// }


// const addTemplate = (template: string, hookId: string) => {
//     return function (constructor: any) {
//         const hookEl = document.getElementById(hookId)
//         const p = new constructor();
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }

// // @Logger("LOGGING - PERSON - LINE 11")


// @addTemplate('<h1> My Person Object</h1>', 'app')
// class Personn {
//     name = "mohamad"

//     constructor() {
//         console.log("creating person object ... ");

//     }


// }

// const personn = new Personn();



// // console.log(personn);


// // -------------


// const Log = (target: any, propertyName: any) => {
//     console.log("log Decorator Excuted");
//     console.log(target);
//     console.log(propertyName);


// }

// const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
//     console.log("accessor decorator");
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// const Log3 = (target: any , name: string , descriptor: PropertyDescriptor) => {
//     console.log("jfjfjfj decorator");
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// const Log4 = (target:any , name:string , position: number) => {
//     console.log("mmmmmmm decorator");
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }


// class Product {
//     @Log
//     title: string;
//     private _price: number;
//     @Log2
//     set price(val: number) {
//         if (val > 0) {
//             this._price = val
//         }
//         else {
//             throw Error("Invalid Price")
//         }
//     }
//     constructor(t: string, p: number) {
//         this.title = t,
//             this._price = p
//     }

//     @Log3
//     getPriceWithTax( tax: number ,@Log4 tax2:number) {
//         return this._price + tax;

//     }
// }


// const p = new Product("lap top" , 12000)


const Autobind = (target: any, name: string, descriptor: PropertyDescriptor) => {

    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const buundfn = originalMethod.bind(this)

            return buundfn;
        }

    }
    return adjDescriptor;

}


class Printer {
    message = "this works!"

    @Autobind
    showMessage() {
        alert(this.message);
    }
}


const p = new Printer();

const button = document.querySelector('button');

button?.addEventListener('click', p.showMessage)
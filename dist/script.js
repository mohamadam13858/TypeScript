"use strict";
// const Logger = (logString: string) => {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const Autobind = (target, name, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const buundfn = originalMethod.bind(this);
            return buundfn;
        }
    };
    return adjDescriptor;
};
class Printer {
    constructor() {
        this.message = "this works!";
    }
    showMessage() {
        alert(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', p.showMessage);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (logString) => {
    return function (constructor) {
        console.log(constructor);
        console.log(logString);
    };
};
const addTemplate = (template, hookId) => {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
};
// @Logger("LOGGING - PERSON - LINE 11")
let Personn = class Personn {
    constructor() {
        this.name = "mohamad";
        console.log("creating person object ... ");
    }
};
Personn = __decorate([
    addTemplate('<h1> My Person Object</h1>', 'app')
], Personn);
const personn = new Personn();
// console.log(personn);
// -------------
const Log = (target, propertyName) => {
    console.log("log Decorator Excuted");
    console.log(target);
    console.log(propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log("accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log("jfjfjfj decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log4 = (target, name, position) => {
    console.log("mmmmmmm decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw Error("Invalid Price");
        }
    }
    constructor(t, p) {
        this.title = t,
            this._price = p;
    }
    getPriceWithTax(tax, tax2) {
        return this._price + tax;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(1, Log4)
], Product.prototype, "getPriceWithTax", null);
const p = new Product("lap top", 12000);

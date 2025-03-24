"use strict";
// const fetchUserData = {
//     id: "u1" , 
//     name:"mohamad",
//     job: {
//        title: 'seo',
//        description: "jhfihjjhfi"
//     }
// }
// console.log(fetchUserData?.job?.description);
// const Nemes: Array<string> = [
// ]
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is Done')
//     }, 2000);
// });
// function merge<T extends object, B extends object>(objA: T, objB: B) {
//     return Object.assign(objA, objB)
// }
// const mergedObj2 = merge({ age: 55 }, { name: "mohamad" });
// interface Lengthy {
//     length: number;
// }
// const countAndDescribe = <T extends Lengthy>(element: T) => {
//     let descriptionText = 'Got No Value';
//     if (element.length === 1) {
//         descriptionText = "got 1 value "
//     } else if (element.length > 1) {
//         descriptionText = `got ${element.length} elements`
//     }
//     return [element, descriptionText]
// }
// console.log(countAndDescribe('hi mohamod'));
// console.log(countAndDescribe(['mohamad', 'leyla']));
// const extractAndConvert = <T extends object , U extends keyof T > (obj: T , key : U) =>{
//     return obj[key]
// }
// extractAndConvert({name: "ali"},'name')
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeitem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStroage = new DataStorage();
textStroage.addItem('mohamad');
textStroage.addItem('ali');
textStroage.removeitem('ali');
console.log(textStroage.getItems());

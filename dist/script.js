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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge({ age: 55 }, { name: "mohamad" });

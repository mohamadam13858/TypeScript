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




function merge<A,U>(objA: A, objB: U) {
    return Object.assign( objB , objA)
}



const mergedObj = (merge({ name: 'mohamad' }, { age: 55 }));




mergedObj.age;
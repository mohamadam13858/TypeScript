"use strict";
// const fetchUserData = {
//     id: "u1" , 
//     name:"mohamad",
//     job: {
//        title: 'seo',
//        description: "jhfihjjhfi"
//     }
// }
const countAndDescribe = (element) => {
    let descriptionText = 'Got No Value';
    if (element.length === 1) {
        descriptionText = "got 1 value ";
    }
    else if (element.length > 1) {
        descriptionText = `got ${element.length} elements`;
    }
    return [element, descriptionText];
};
console.log(countAndDescribe('hi mohamod'));
console.log(countAndDescribe(['mohamad', 'leyla']));

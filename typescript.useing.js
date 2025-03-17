var phoneNumber;
var phoneNumber2;
var phoneNumber3 = false;
var add = function (n1, n2, isPrintResult, resultText) {
    var result = n1 + n2;
    if (isPrintResult) {
        console.log(resultText + result);
    }
    else {
        console.log(result);
    }
    return n1 + n2;
};
var number1;
number1 = 5;
var number2 = 2.8;
var isPrintResult = true;
var resultText = "Result is :";
add(number1, number2, isPrintResult, resultText);
// let person:object;
var favoriteActivities;
favoriteActivities = ['music', 'coding'];
// console.log(person.name + "-" + person.age);
// console.log(person.name);
// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }
var arrayExample = ['mohamad', 32, true];
arrayExample[0] = false;
arrayExample[1] = "hassan";
var tupleExample;
tupleExample = ["mj", 55, true];
tupleExample[0] = "jdjh";
tupleExample[1] = 55;
// const ADMIN=0 ;
// const READ_ONLY_USER=1;
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "mohamad",
    age: 23,
    isMale: true,
    hobbies: [
        "sports", "cooking", "watch Movies"
    ],
    role: Role.ADMIN
};
console.log(Role);
// if (person.role === 1) {
//     console.log('mohamad');
// }

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
var person = {
    name: "mohamad",
    age: 23,
    isMale: true,
    hobbies: [
        "sports", "cooking", "watch Movies"
    ]
};
var favoriteActivities;
favoriteActivities = ['music', 'coding'];
// console.log(person.name + "-" + person.age);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}

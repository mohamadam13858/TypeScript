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
var person;
person = {
    name: "mohamad",
    age: 23,
    isMale: true
};
console.log(person.name + "-" + person.age);

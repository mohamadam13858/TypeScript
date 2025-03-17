
var phoneNumber: number;


let phoneNumber2: string;


const phoneNumber3: boolean = false;



const add = (n1: number, n2: number, isPrintResult: boolean, resultText: string) => {
    const result = n1 + n2
    if (isPrintResult) {
        console.log(resultText + result);
    } else {
        console.log(result);
    }


    return n1 + n2
}

let number1: number;
number1 = 5;


let number2 = 2.8;

let isPrintResult = true;

let resultText = "Result is :"



add(number1, number2, isPrintResult, resultText);



// let person:object;

let person = {
    name: "mohamad",
    age: 23,
    isMale: true,
    hobbies: [
        "sports", "cooking", "watch Movies"
    ]
}


let favoriteActivities: string[];

favoriteActivities = ['music', 'coding'];


// console.log(person.name + "-" + person.age);

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby);

}





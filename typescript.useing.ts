
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




let favoriteActivities: string[];

favoriteActivities = ['music', 'coding'];


// console.log(person.name + "-" + person.age);

// console.log(person.name);


// for (const hobby of person.hobbies) {
//     console.log(hobby);

// }


let arrayExample = ['mohamad', 32, true]

arrayExample[0] = false
arrayExample[1] = "hassan"



let tupleExample: [string, number, boolean]

tupleExample = ["mj", 55, true]

tupleExample[0] = "jdjh"
tupleExample[1] = 55



// const ADMIN=0 ;
// const READ_ONLY_USER=1;
// const AUTHOR = 2


enum Role { ADMIN = 1, READ_ONLY_USER, AUTHOR }

let person = {
    name: "mohamad",
    age: 23,
    isMale: true,
    hobbies: [
        "sports", "cooking", "watch Movies"
    ],
    role: Role.ADMIN
}

// console.log(Role);


// if (person.role === 1) {
//     console.log('mohamad');

// }




function combine(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 == "number" && typeof input2 == "number") {
        const result = input1 + input2
        return result
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}


const combinedAges = combine(30, 26)

const combinedNames = combine("mohamad", "ali")


console.log(combinedAges);






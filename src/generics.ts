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


// class DataStorage<T extends string | number | boolean> {


//     private data: T[] = [];


//     addItem(item: T) {
//         this.data.push(item)
//     }


//     removeitem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data]
//     }

// }


// const textStroage = new DataStorage<string>();


// textStroage.addItem('mohamad');
// textStroage.addItem('ali');
// textStroage.removeitem('ali');

// console.log(textStroage.getItems());

// const numberStorage = new DataStorage<number>();

// numberStorage.addItem(123)



// interface Mohamadd {
//     name: string;
//     age: number;
//     email: string;
// }



// const mohammad: Mohamadd = {
//     name: "mohamd",
//     age: 45,
//     email: "jifjipewjipgfjo"

// }

// const Mohammad: Partial<Mohamadd> = {
//     name: "ali",
//     age: 66,
//     email: ""
// }




// interface Props {
//     a?: number;
//     b?: string
// }

// const obj: Props = { a: 3 };

// const obj2: Required<Props> = { a: 5545, b: "ldk" }


// interface Todo {
//     title: string ;

// }

// const todo:Readonly<Todo> = {
//     title: "learn typeScript"
// }



// let some: unknown;

// if(typeof some === string)
// some: string = "Text";
// let str: string;
// str: string = some;



// let some: unknown;
// some = 'Text';
// let str: string;

// if (typeof some === 'string') {
//     str = some; // Тепер TypeScript знає, що 'some' є рядком
//     console.log(str); // Виведе: Text
// } else {
//     console.log('some не є рядком');
// }
// export {};


let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some;
}
export {};

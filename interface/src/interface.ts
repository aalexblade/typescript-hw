// interface Person{
//     firstName: string;
//     lastname: string;
//     age?: number; 
// }

// function greet(person:Person){
//     console.log(`Hello, ${person.firstName} ${person.lastname}`);
// }

// const jhon: Person={
//     firstName: "Jhon",
//     lastname: "Doe",
// };

// greet(jhon);

// ============================================
// Інтерфейси об'єктів

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name );
//   }
// };

// user.greet('Hi there - I am');


// ============================================
// замінимо interface на type.

// type IPerson = {
//   name: string;
//   age: number;  

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//     name: 'Anthony',
//     age: 21,

//     greet(phrase) {
//       console.log(phrase + ' ' + this.name );
//     }
//     };

// =============================================

// Інтерфейси класів


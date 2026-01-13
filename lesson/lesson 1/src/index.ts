// type User = {
//   name: string;
//   age: number | string;
// };
// type size = "small" | "medium" | "large";

// add("1", 1); // '11'

// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// let age = 10;
// // let age: number = 10

// age = "12";

// const numbers: number[] = [1, 2, 4, 5, 6, 3, 0];
// numbers.push('12')

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
//   isActive: false,
// };

// user.age = "15";
// user.name = 1

// type eventType = "lesson" | "deadline";

// const event: eventType = "homework";

// let age: any = 10;
// age = "Bob";
// age = false;

// let name: unknown = 12;
// name = "Bob";
// name.toFixed();

// type size = "small" | "medium" | "large";

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large";

// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2, 3);

// type User = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };

// type User = {
//   name: string;
//   age: number;
//   role?: string;
// };

// const user: User = {
//   name: "bob",
//   age: 12,
// };

// const admin: User = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };

// =====================================

// 1. Define a type for a Smartphone object
type Smartphone = {
  brand: string;
  model: string;
  storage: number;
  batteryHealth: number;
  // A method that takes a volume level and returns nothing (void)
  setVolume: (level: number) => void;
};

// Create an object based on the Smartphone type
const myPhone: Smartphone = {
  brand: "Samsung",
  model: "Galaxy S23",
  storage: 256,
  batteryHealth: 98,
  setVolume(level) {
    console.log(`Volume set to ${level}%`);
  },
};

// 2. Define a type for a Product with an optional field
type Product = {
  id: string;
  title: string;
  price: number;
  discount?: number; // Optional field (can be undefined)
};

// Standard product without a discount
const laptop: Product = {
  id: "abc-101",
  title: "Work Laptop",
  price: 1200,
};

// Product with all fields included
const tablet: Product = {
  id: "xyz-202",
  title: "Graphic Tablet",
  price: 450,
  discount: 15, // Discount applied
};

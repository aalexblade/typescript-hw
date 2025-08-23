//  Основні типи
// Прості типи

let age: number = 27;
let username: string = "Cooper";
let isOnline: boolean = true;

// ========================================
// Масиви

let numbers: number[] = [1, 2, 3, 4, 6];
let names: string[] = ["Coorer", "Vlad", "Anna"];

// =========================================
// Об'єкти

let User: { name: string; age: number } = {
  name: "Rembo",
  age: 49,
};

// =========================================
// Any (краще уникати)

let something: any = "Hello";
something = 321;

// ==========================================
// ==========================================
// Функції

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Vlad"));

// name: string — параметр з типом.
// : string після дужок — тип повертаємого значення.

// ===========================================
// ===========================================
// Типи та інтерфейси

// Якщо об’єкт використовується багато разів, зручно винести його в тип:

type User = {
  name: string;
  age: number;
};

let u1: User = { name: "Vlad", age: 22 };

// або через інтерфейс:
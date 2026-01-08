/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// export {};

// ====================================================

// class Student {
//   // TypeScript автоматично створить і проініціалізує властивості
//   constructor(public name: string, public age: number, public grade: string) {
//     // Тіло конструктора залишається пустим
//   }
// }

// const student1 = new Student('Ivan', 20, 'A');

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.grade);

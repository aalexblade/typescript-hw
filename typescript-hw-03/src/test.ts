// Інкапсуляція в об'єктно-орієнтованому програмуванні (ООП)

import { server } from '../node_modules/typescript/lib/typescript';

class MyClass {
  private protectedMethod() {
    return 'Something';
  }

  public myPublicMethod() {
    return this.protectedMethod();
  }
}
// ===================Інкапсуляцію на чистому JavaScript можна реалізувати ось так:
function protectedMethod() {
  return 'Something';
}

class myClass {
  myPublicMethod() {
    return protectedMethod();
  }
}
// ===================Наслідування

class ClassA {
  public myMethod() {
    return "I'm a class A";
  }
}

class ClassB extends ClassA {
  // ClassB наслідує всі властивості та методи ClassA
}

let b = new ClassB();
console.log(b.myMethod()); // "I'm a class A"

// =======================================Поліморфізм

class Animal {
  public say() {
    console.log("I'm an animal");
  }
}

class Cat extends Animal {
  public say() {
    // перевизначення методу say() для Cat
    console.log('Meow');
  }
}

class Dog extends Animal {
  public say() {
    // перевизначення методу say() для Dog
    console.log('Woof');
  }
}

let animal: Animal = new Cat();
animal.say(); // Виводить "Meow"

animal = new Dog();
animal.say(); // Виводить "Woof"

// =================================Абстракція

class classA {
  private process1() {
    return 1;
  }
  private process2() {
    return 2;
  }
  private process3() {
    return 3;
  }

  public superProcess() {
    return this.process1() + this.process2() + this.process3();
  }
}

// ==============================Принципи ООП (S.O.L.I.D)

// Невірно: клас робить занадто багато речей
class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public save(): void {
    // Логіка для збереження користувача в базі даних
  }

  public sendEmail(message: string): void {
    // Логіка для відправки електронної пошти користувачу
  }
}

// Вірно: кожен клас виконує тільки одну задачу

class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public save(): void {
    // Логіка для збереження користувача в базі даних
  }
}

class EmailService {
  public sendEmail(user: User, message: string): void {
    // Логіка для відправки електронної пошти користувачу
  }
}

// ==========================OCP (Open/closed principle) - Принцип відкритості/закритості

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class AreaCalculator {
  public calculate(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}

// ============================= Ми могли б змінити клас AreaCalculator, щоб він міг обробляти кола, але це призведе до зміни вже наявного коду, що порушує принцип відкритості/закритості.

// використовувати абстракцію та поліморфізм, щоб задовольнити цей принцип:

// interface Shape {
//     calculateArea(): number;
// }

// class Rectangle implements Shape {
//     public width: number;
//     public height: number;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// class Circle implements Shape {
//     public radius: number;

//     constructor(radius: number) {
//         this.radius = radius;
//     }

//     calculateArea(): number {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }

// class AreaCalculator {
//     public calculate(shape: Shape): number {
//         return shape.calculateArea();
//     }
// }

// ======================Скорочений синтаксис для ініціалізації властивостей

// У JavaScript ми маємо вручну оголосити властивості класу і потім ініціалізувати їх у конструкторі, ось приклад стандартного синтаксису в TypeScript:

// class House {
//   private type: string;
//   private street: string;

//   constructor(type: string, street: string) {
//     this.type = type;
//     this.street = street;
//   }
// }

// Синтаксис TypeScript пропонує набагато елегантніший підхід. Замість окремого оголошення та ініціалізації властивостей ми можемо робити це прямо у списку параметрів конструктора:

// class House{
//   constructor(private type:string, street:string){}
// }
// export{}

// ============Readonly

// class House {
//   constructor(private readonly type: string, private street: string) {}

//   changeType(type: string) {
//     this.type = type; // Помилка: Неможливо змінити властивість "type", оскільки вона "readonly".
//   }
// }

// export {};

// Однак важливо пам'ятати, що readonly робить об'єкти або масиви, пов'язані з властивістю, незмінними. Наприклад, якщо у вас є властивість, яка є масивом, і вона оголошена як readonly, ви все одно зможете додавати або видаляти елементи з цього масиву. Модифікатор readonly застосовується тільки до самої властивості, а не до об'єкта чи масиву, на який він посилається.

// class House {
//   constructor(public readonly tenants: string[]) {}

//   addTenant(tenant: string) {
//     this.tenants.push(tenant); // Не виникне жодних помилок, навіть якщо 'tenants' є 'readonly'.
//   }
// }

// const house = new House([]);

// house.addTenant('Alice');

// console.log(house.tenants); // Виведе: ['Alice']

// export {};

// ======================Наслідування

// class House {
//   constructor(private readonly type: string, private street: string) {}
// }

// class StoneHouse extends House {
//   constructor(street: string) {
//     super('stone', street); // Виклик батьківського конструктора
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world');

// export {};

// super() викликає батьківський конструктор, і його потрібно викликати до будь-якої маніпуляції з this у конструкторі. У нашому прикладі ми створили підклас StoneHouse, який під час створення об'єкта прямо передає тип 'stone' у батьківський конструктор.

// Тепер давайте детальніше розберемо тему перевизначення методів. Ми повернемо частину функціонала до нашого класу House, щоб код міг компілюватися без помилок.

// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log('Address: ' + this.street);
//   }

//   public showType(this: House) {
//     console.log('House Type: ' + this.type);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string; // Головний в домі

//   constructor(street: string, generalTenant: string) {
//     super('stone', street); // Виклик батьківського конструктора

//     // Додаємо власника квартири.

//     this.chargeOfTheHouse = generalTenant;

//     this.addTenant(generalTenant);
//   }

//   public showTenants() {
//     console.log('General: ' + this.chargeOfTheHouse);

//     // Запускаємо батьківський метод showTenants();

//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world', 'Max');

// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant('Nikita');

// stoneHouse.showTenants();
// stoneHouse.showType();
// stoneHouse.showAddress();

// export {};

// ===============================Getter/Setter

// type PersonInformation = {
//   firstName?: string;
//   lastName?: string;
// };

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName(value: string) {
//     console.log('firstName added');

//     this.personInfo.firstName = value;
//   }

//   set lastName(value: string) {
//     console.log('lastName added');

//     this.personInfo.lastName = value;
//   }

//   get info() {
//     const { personInfo } = this;

//     return `${personInfo.lastName} ${personInfo.firstName}`;
//   }
// }

// const person = new Person();

// person.lastName = 'Pupkin'; // lastName added
// person.firstName = 'Petha'; // firstName added

// console.log(person.info); // Pupkin Petha

// export {};

// =========================Статичні методи та властивості

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod() {
//     console.log('Run static method');
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount(); // 3
// obj2.showCount(); // 3
// obj3.showCount(); // 3

// UseStatic.itStaticMethod(); // Run static method

// export {};

// ===================================Abstract classes

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize extends Plane {
  public startEngine() {
    // Запускаємо винти двигуна.

    return true;
  }
}

class Boeing extends Plane {
  public startEngine() {
    // Розігріваємо реактивні турбіни.

    return true;
  }
}

class BrokenPlane extends Plane {} // Error: Клас 'BrokenPlane' не реалізовує унаслідований абстрактний метод 'startEngine' з класу 'Plane'.

export {};

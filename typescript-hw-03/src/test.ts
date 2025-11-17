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

interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    public width: number;
    public height: number;
    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    public radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class AreaCalculator {
    public calculate(shape: Shape): number {
        return shape.calculateArea();
    }
}
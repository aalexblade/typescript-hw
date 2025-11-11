// Інкапсуляція в об'єктно-орієнтованому програмуванні (ООП)

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
  public say() { // перевизначення методу say() для Cat
    console.log('Meow');
  }
}

class Dog extends Animal {
  public say() { // перевизначення методу say() для Dog
    console.log('Woof');
  }
}

let animal: Animal = new Cat();
animal.say(); // Виводить "Meow"

animal = new Dog();
animal.say(); // Виводить "Woof"

// =================================Абстракція

class classA {
  private process1 () {
    return 1;
  }
  private process2 () {
    return 2;
  }
  private process3 () {
    return 3;
  }

  public superProcess () {
    return this.process1() + this.process2() + this.process3();
  }
}


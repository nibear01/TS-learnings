// abstract class in TS

abstract class Animal {
  abstract makeSound(): void; // Abstract method (does not have an implementation)
  move(): void {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  // abstract class helps to define a blueprint for other classes.
  // The Dog class must implement the abstract method makeSound() from the Animal class.
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
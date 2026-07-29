// readonly in TS oop

// we can use readonly in TS to make a property of a class immutable. Once a readonly property is assigned a value, it cannot be changed.
class Person {
    readonly name: string
    constructor(name: string) {
        this.name = name;
    }
}

const person1 = new Person("John");
console.log(person1.name); // Output: John
// person1.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

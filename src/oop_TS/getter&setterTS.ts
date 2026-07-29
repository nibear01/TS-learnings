// getter & setter in TS

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // getName(): string {
    //     return this._name;
    // }

    // setName(value: string): void {
    //     this._name = value;
    // }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const person1 = new Person("John");
console.log(person1.name); // Output: John
person1.name = "Doe"; // using setter to change the name
console.log(person1.name); // Output: Doe

// person1.getName(); // Output: Doe
// person1.setName("Smith"); // using setter method to change the name
// console.log(person1.getName()); // Output: Smith
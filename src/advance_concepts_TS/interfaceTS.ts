// Interface & Generics in TypeScript

// Interface
interface Person{
    name: string;
    age: number;
    address?: string; // optional property
}

const person1: Person = {
    name: "John",
    age: 30,
    address: "123 Main St"
};

// interface with function
const greet: (person: Person) => string = (person) => {
    return `Hello, ${person.name}!`;
}

console.log(greet(person1)); // Output: Hello, John!


interface Employee {
    canDrive(): boolean;
    getSalary(): number;
}

// since employee is an interface and has 2 methods defined, the employee that will be created must 
// must implement the methods defined in the interface. If not, it will throw an error.
const emp1: Employee = {
    canDrive: () => true,
    getSalary: () => 50000
}

interface A{ a: string};
interface B{ b: string};

// interface inheritance
interface C extends A, B {
    c: string;
}

const obj: C = {
    a: "Value A",
    b: "Value B",
    c: "Value C"
}

// we have to define all the variables of A, B and C in the object, otherwise it will throw an error.
console.log(obj); // Output: { a: 'Value A', b: 'Value B', c: 'Value C' }


// Array of strings and numbers in TypeScript
const products: string[] = ["Laptop", "Smartphone", "Tablet", "Monitor", "Keyboard"];
const numbers: number[] = [10, 20, 30, 40, 50];
const mixedArray: (string | number)[] = ["Laptop", 10, "Smartphone", 20, "Tablet", 30];
const rating: Array<number> = [4.5, 3.8, 4.9, 4.2, 5.0]; // definig an array of numbers using the Array generic type

//users array of objects in TypeScript
type user = {name: string, age: number, isActive: boolean};

const usersArray: user[] = [
    { name: "John", age: 25, isActive: true },
    { name: "Jane", age: 30, isActive: false },
    { name: "Bob", age: 35, isActive: true }
]

//READONLY array in TypeScript 
const cities: readonly string[] = ["Dhaka", "Chittagong", "Khulna"];
// cities.push("Barishal"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// we can only read the values of the readonly array, but we cannot modify it.

//Multidimensional array in TypeScript
const matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// we can also define a multidimensional array using the Array generic type
const matrix2: Array<Array<number>> = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];


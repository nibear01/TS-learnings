let user: [string, number, boolean]; // defining a tuple with string, number and boolean types
user = ["John", 25, true]; // assigning values to the tuple

let product: [string, number, boolean?] 
product = ["Laptop", 1000]; // assigning values to the tuple with optional boolean type
product = ["Laptop", 1000, true]; // assigning values to the tuple with optional boolean type

//READONLY tuple in TypeScript
const userInfo: readonly [string, number] = ["John", 25];
// userInfo[0] = "Jane"; // Error: Index signature in type 'readonly [string, number]' only permits reading.

//NAMED tuple in TypeScript
type User = [name: string, age: number, isActive: boolean];
const userDetails: User = ["John", 25, true]; // assigning values to the named tuple
//used most in function return type to return multiple values from a function
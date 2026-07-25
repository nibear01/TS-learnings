// forecfull type assertion in ts:
let age:any = 25;

let preferredAge = (age as number).toFixed(2); // preferred way of type assertion in ts
// this way we can easily access the built-in methods of the number type, like toFixed(), without any type errors.
// can do same for other data types too.


/* scenario: when we save a object in local storage, it will be saved as a string.
when we make it back to object, we need to use type assertion to tell ts that this is an object and not a string. 
*/

type User = {
  name: string;
  age: number;
};  

let personString = '{"name": "Naved", "age": 25}'; // this is a string
let user = JSON.parse(personString) as User; // type assertion to tell ts that this is a User object and not a string.
console.log(user); // 'Naved'

// if we use any type and by mistake we use wrong methods, it will not give any error, 
// but if we use unknown type, it will give error and we can fix it.

let value:any;

value = 25;
value = "Naved";
value = [1, 2, 3];
value.toUpperCase(); // no error, but will give runtime error

let valueUnknown:unknown;   

valueUnknown = 25;
valueUnknown = "Naved";
valueUnknown = [1, 2, 3];
// valueUnknown.toUpperCase(); // error: Object is of type 'unknown'.ts(2571) - this is good, because it will give error and we can fix it.

if (typeof valueUnknown === "string") {
  valueUnknown.toUpperCase(); // no error, because we have checked the type of valueUnknown before using it.
}
// Gernerics in TS

function identity<T>(arg: T): T[] {
  return [arg];
}

console.log(identity("Hello")); // Output: ["Hello"]
console.log(identity(42)); // Output: [42]
// so this will return an array of same data type as the argument passed to the function.

function returnPair<NAME, AGE>(name: NAME, age: AGE): [NAME, AGE] {
  return [name, age];
}

const nameArr = ["John", "Doe", "Alice"];
const ageArr = [30, 25, 28];
const arr = [];

for (let i = 0; i < nameArr.length; i++) {
  arr.push(returnPair(nameArr[i], ageArr[i]));
}
console.log(arr); // Output: [["John", 30], ["Doe", 25], ["Alice", 28]]
// we used generics to create a function that can take any data type as an argument and return a tuple of the same data type.

interface pair<NAME, AGE> {
  name: NAME;
  age: AGE;
}

// interface with generics can be used to create a type that can take any data type as an argument and return an object of the same data type.
const person1: pair<string, number> = {
  name: "Naved",
  age: 20,
};

interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: {
    name: "Naved",
    age: 20,
  },
};


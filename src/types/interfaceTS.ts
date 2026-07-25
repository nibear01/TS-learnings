/*
 before interface lets learn how we can use custom type to define the shape of an object in ts. 
 we can use type alias to define the shape of an object. 
 we can also use union types to define the shape of an object. 
 we can also use intersection types to define the shape of an object.
 we can also use type guards to narrow down the type of an object. */

type Student = {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
};

// problem: if we want to use the Student type in multiple files, we have to write it again in each function.
// function getStudentInfo(student: { name: string; age: number; isActive: boolean; hobbies: string[] }) {
//   return `Student name: ${student.name} and student age: ${student.age}`;
// }

function getStudentInfo(student: Student) {
  return `Student name: ${student.name} and student age: ${student.age}`;
}

function getStudentHobbies(student: Student) {
  return `Student hobbies: ${student.hobbies.join(", ")}`;
}

// interface in ts is similar to type alias, but it can be extended and implemented.
interface Teacher {
  name: string;
  subject: string;
  isActive: boolean;
}

// interface gave a structure to the class, so that we can implement the interface in the class
// and get the benefits of type checking and intellisense.
class MathTeacher implements Teacher {
  name: string = "Naved";
  subject: string = "Math";
  isActive: boolean = true;
}

// interface can be extended to create a new interface.
// so we can create a new interface SeniorTeacher that extends the Teacher interface and adds a new property experience.
interface SeniorTeacher extends Teacher {
  experience: number;
}

type vanilaCake = { name: string; flavor: string; isAvailable: boolean };
type chocolateCake = {
  name: string;
  flavor: string;
  isAvailable: boolean;
  hasChocolateChips: boolean;
};

// intersection type in ts is used to combine multiple types into one type.
// so we can create a new type ChocolateVanillaCake that combines the vanilaCake and chocolateCake types.
type ChocolateVanillaCake = vanilaCake & chocolateCake;

function getCakeInfo(cake: ChocolateVanillaCake) {
  return `Cake name: ${cake.name}, flavor: ${cake.flavor}, is available: ${cake.isAvailable}, has chocolate chips: ${cake.hasChocolateChips}`;
}

const cake1: ChocolateVanillaCake = {
  name: "Chocolate Vanila Cake",
  flavor: "Chocolate Vanila",
  isAvailable: true,
  hasChocolateChips: true,
};
console.log(getCakeInfo(cake1)); // 'Cake name: Chocolate Vanila Cake, flavor: Chocolate Vanila, is available: true, has chocolate chips: true'

const cake2: ChocolateVanillaCake = {
  name: "Vanila Cake",
  flavor: "Vanila",
  isAvailable: true,
  hasChocolateChips: false,
};

console.log(getCakeInfo(cake2));
// 'Cake name: Vanila Cake, flavor: Vanila, is available: true, has chocolate chips: undefined'
// - this is because we have not provided the hasChocolateChips property in the cake2 object,
// but it is required in the ChocolateVanillaCake type. so we will get an error.

// literal types in ts are used to define a variable that can only have a specific value.
let apiRequestStatus: "success" | "error" | "pending" = "success"; // union type with string literals

function getApiRequestStatus(status: typeof apiRequestStatus): string {
  switch (status) {
    case "success":
      return "API request was successful";
    case "error":
      return "API request failed";
    case "pending":
      return "API request is pending";
  }
}

console.log(getApiRequestStatus("success")); // 'API request was successful'
console.log(getApiRequestStatus("error")); // 'API request failed'
console.log(getApiRequestStatus("pending")); // 'API request is pending'
    
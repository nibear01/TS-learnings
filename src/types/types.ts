// ts annotations for typescript - i have to tell ts about the type of variable, function, etc. 
// so that it can check for type errors and provide better intellisense and code completion.

// ts inference - ts can infer the type of variable, function, etc. based on the value assigned to it.

let name: string = "Naved"; // explicit type annotation
let age: number = 25; // explicit type annotation
let isActive: boolean = true; // explicit type annotation
let hobbies: string[] = ["reading", "coding", "gaming"]; // explicit type annotation

let nameInferred = "Naved"; // inferred type annotation
let ageInferred = 25; // inferred type annotation
let isActiveInferred = true; // inferred type annotation
let hobbiesInferred = ["reading", "coding", "gaming"]; // inferred type annotation

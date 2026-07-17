//union in ts:
let phoneNumber: number | string = "+8801729382093";

let apiRequestStatus: "success" | "error" | "pending" = "success"; // union type with string literals

// Any type in ts:
let data: any = "Hello World"; // any type can hold any value

let userData: any = {
    name: "Naved",
    age: 25,
    isActive: true,
    hobbies: ["singing", "coding", "hangout"]
}; // any type can hold any object

//FUNCTION IN TS

/* 
    syntax:
    function functionName(param1: type, param2: type): returnType {
        //function body
    }
*/

//PARAMETER TYPE IN TS
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10)); //15
// we have defined the function to accept only numbers and return a number.
// If we try to pass a string or any other type, it will throw an error.

//VOID FUNCTION IN TS
function logMessage(message: string): void {
  console.log(message);
}
// logs the message to the console and returns nothing.


//OPTIONAL PARAMETER IN TS
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}.`;
}
// The age parameter is optional and can be omitted when calling the function.
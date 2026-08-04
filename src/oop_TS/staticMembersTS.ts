// static variable and static method

class Employee {
  static employeeCount: number = 0; // static variable

  constructor(public name: string) {
    Employee.employeeCount++; // Increment the static variable whenever a new instance is created
  }
}

const emp1 = new Employee("Alice");
const emp2 = new Employee("Bob");
console.log(Employee.employeeCount); // Output: 2
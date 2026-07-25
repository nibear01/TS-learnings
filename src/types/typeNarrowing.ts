// Guard the type of a variable using type narrowing in TypeScript

function getCGPA(cgpa: number | string): string {
  if (typeof cgpa === "number") {
    return `its a number: Your CGPA is ${cgpa}`;
  }
  return `its a string: Your CGPA is ${parseFloat(cgpa).toFixed(2)}`;
}

console.log(getCGPA("3.5"));
console.log(getCGPA(3.5));

class userAge {
  age(): string {
    return "Age is 25";
  }
}

function getUserAge(user: userAge | string): string {
  if (user instanceof userAge) {
    return user.age();
  }
  return "Age is unknown";
}

const user = new userAge();
console.log(getUserAge(user)); //'Age is 25'
console.log(getUserAge("Unknown")); // 'Age is unknown'

// defining a custom type
type student = {
  name: string;
  age: number;
};

const student = {
  name: "Naved",
  age: 25,
};

function checkStudent(obj: any): obj is student {
  return (
    typeof obj === "object" &&
    typeof obj.name === "string" &&
    typeof obj.age === "number" &&
    obj !== null
  );
}

function getStudentInfo(stu: student | string) {
  if (checkStudent(stu)) {
    return `Student name: ${stu.name} and student age: ${stu.age}`;
  }
  return `Student: ${stu}`
}

console.log(getStudentInfo(student)); // 'Student name: Naved and student age: 25'
console.log(getStudentInfo("Unknown")); // 'Student: Unknown'


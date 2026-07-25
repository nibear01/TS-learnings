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
  return `Student: ${stu}`;
}

console.log(getStudentInfo(student)); // 'Student name: Naved and student age: 25'
console.log(getStudentInfo("Unknown")); // 'Student: Unknown'

// defining some student types - 
type freshman = { type: "freshman"; name: string; age: number };
type sophomore = { type: "sophomore"; name: string; age: number };
type junior = { type: "junior"; name: string; age: number };
type senior = { type: "senior"; name: string; age: number };

type studentType = freshman | sophomore | junior | senior;

function getStudentType(student: studentType): string {
  switch (student.type) {
    case "freshman":
      return `Student is a freshman: ${student.name} and student age: ${student.age}`;
    case "sophomore":
      return `Student is a sophomore: ${student.name} and student age: ${student.age}`;
    case "junior":
      return `Student is a junior: ${student.name} and student age: ${student.age}`;
    case "senior":
      return `Student is a senior: ${student.name} and student age: ${student.age}`;
  }
}
const student2026: studentType = {
  type: "senior",
  name: "Naved",
  age: 25,
};
console.log(getStudentType(student2026)); // 'Student is a senior: Naved and student age: 25'

// should not use any type in ts, it will defeat the purpose of using ts. use unknown type instead of any type.

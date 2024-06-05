interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: true
};

interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Assign the function to a variable of the interface type
const printTeacherFunction: PrintTeacherFunction = printTeacher;

// Now you can use printTeacherFunction just like printTeacher
console.log(printTeacherFunction("John", "Doe")); // Outputs: J. Doe

// Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Define the interface for the class instance
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define the class
const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
};

// Now you can create a new student
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Outputs: Currently working
console.log(student.displayName()); // Outputs: John

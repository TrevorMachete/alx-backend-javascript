// Defining the subjects
const CPP = 'Cpp';
const JAVA = 'Java';
const REACT = 'React';

// Defining the Teacher
const cTeacher = {
  experienceTeachingC: 10,
  getRequirements: function(subject: any) {
    // This function will return the requirements for a given subject
    // For now, it's just a placeholder
    return `Requirements for ${subject}: Placeholder`;
  },
  getAvailableTeacher: function(subject: any) {
    // This function will return the available teacher for a given subject
    // For now, it's just a placeholder
    return `Available teacher for ${subject}: Placeholder`;
  }
};

// Logging the details for each subject
console.log(CPP);
console.log(cTeacher.getRequirements(CPP));
console.log(cTeacher.getAvailableTeacher(CPP));

console.log(JAVA);
console.log(cTeacher.getRequirements(JAVA));
console.log(cTeacher.getAvailableTeacher(JAVA));

console.log(REACT);
console.log(cTeacher.getRequirements(REACT));
console.log(cTeacher.getAvailableTeacher(REACT));

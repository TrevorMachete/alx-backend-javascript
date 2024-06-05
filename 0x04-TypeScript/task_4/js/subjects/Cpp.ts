// Cpp.ts

namespace Subjects {
    // Using declaration merging, add a new optional attribute experienceTeachingC to the Teacher interface
    export interface Teacher {
        experienceTeachingC?: number;
    }

    // Create a class Cpp extending from Subject
    export class Cpp extends Subject {
        // Write a method named getRequirements
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        // Write a method named getAvailableTeacher
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}

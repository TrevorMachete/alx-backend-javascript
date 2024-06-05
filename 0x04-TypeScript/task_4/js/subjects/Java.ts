// Java.ts

namespace Subjects {
    // Add a new attribute experienceTeachingJava to the Teacher interface
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Create a class Java in the same namespace
    export class Java extends Subject {
        // Write a method named getRequirements
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        // Write a method named getAvailableTeacher
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}

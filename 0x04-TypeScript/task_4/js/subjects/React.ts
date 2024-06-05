// React.ts

namespace Subjects {
    // Add a new attribute experienceTeachingReact to the Teacher interface
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    // Create a class React in the same namespace
    export class React extends Subject {
        // Write a method named getRequirements
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        // Write a method named getAvailableTeacher
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}

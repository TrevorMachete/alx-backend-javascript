// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: string;
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: string;
  }
  
  // Define the sumMajorCredits function
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
  }
  
  // Define the sumMinorCredits function
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
  }
  
// Your code here
export function currentAgeForBirthYear(birthYear) {
    // Input validation
    if (typeof birthYear !== 'number') {
      throw new Error('Birth year must be a number');
    }
    
    if (!Number.isInteger(birthYear)) {
      throw new Error('Birth year must be an integer');
    }
  
    // Core logic
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

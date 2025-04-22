import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  // Main test case
  it("returns correct age based on current year", () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1990;
    const expectedAge = currentYear - birthYear;
    
    const result = currentAgeForBirthYear(birthYear);
    expect(result).toBe(expectedAge);
  });

  // Edge cases
  it("returns 0 when born this year", () => {
    const currentYear = new Date().getFullYear();
    expect(currentAgeForBirthYear(currentYear)).toBe(0);
  });

  it("returns negative age for future birth years", () => {
    const futureYear = new Date().getFullYear() + 1;
    expect(currentAgeForBirthYear(futureYear)).toBe(-1);
  });

  // Error cases
  it("throws error for non-number input", () => {
    expect(() => currentAgeForBirthYear("1990")).toThrow("Birth year must be a number");
  });

  it("throws error for decimal years", () => {
    expect(() => currentAgeForBirthYear(1990.5)).toThrow("Birth year must be an integer");
  });
});
// Student Grade Generator.
// This program takes student marks as input and returns the correct grade
// Marks must be between 0 and 100

function generateGrade(marks) {
  // Check if the input marks are valid (0–100)
  if (marks > 100 || marks < 0) {
    return "Invalid marks. Enter between 0 and 100.";
  }

  // If marks are greater than 79, grade is A
  else if (marks > 79) {
    return "Grade: A";
  }

  // If marks are between 60 and 79 (inclusive), grade is B
  else if (marks >= 60) {
    return "Grade: B";
  }

  // If marks are between 50 and 59 (inclusive), grade is C
  else if (marks >= 50) {
    return "Grade: C";
  }

  // If marks are between 40 and 49 (inclusive), grade is D
  else if (marks >= 40) {
    return "Grade: D";
  }

  // If marks are less than 40, grade is E
  else {
    return "Grade: E";
  }
}

// test the function with random sample inputs
console.log(generateGrade(85)); // Expected output: Grade: A
console.log(generateGrade(45)); // Expected output: Grade: D
console.log(generateGrade(30)); // Expected output: Grade: E
console.log(generateGrade(101)); // Expected output: Invalid marks. Enter between 0 and 100.

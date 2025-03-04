// Constant for employee presence
const IS_PRESENT = 1;

// Generate a random number (0 or 1) to check presence
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

// Check if employee is present or absent
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

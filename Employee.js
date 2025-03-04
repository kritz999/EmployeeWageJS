// Constants for employee work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

/**
 * Function to get working hours based on employee type
 * @param {number} empCheck - Randomly generated work type (0, 1, or 2)
 * @returns {number} - Work hours based on the employee type
 */
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; // No work
    }
}

// Generate a random work type (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let empHours = getWorkHours(empCheck); // Get work hours
let empWage = empHours * WAGE_PER_HOUR; // Calculate daily wage

console.log(`Employee worked for ${empHours} hours and earned $${empWage}`);

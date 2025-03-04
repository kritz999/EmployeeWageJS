// Constants for employee work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Generate a random work type (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let empHours = 0;

// Determine working hours using switch statement
switch (empCheck) {
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0; // No work
}

// Calculate daily wage
let empWage = empHours * WAGE_PER_HOUR;
console.log(`Employee worked for ${empHours} hours and earned $${empWage}`);


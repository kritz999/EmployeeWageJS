// Constants for employee work types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

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

// Variables to track total working hours and days
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;

// Loop until max working hours (160) or max days (20) is reached
while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    let empHours = getWorkHours(empCheck);
    
    // Check if adding current hours exceeds max allowed hours
    if (totalWorkingHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkingHours; // Adjust to max limit
    }

    totalWorkingHours += empHours;
    totalWorkingDays++;
    let dailyWage = empHours * WAGE_PER_HOUR;
    totalEmpWage += dailyWage;

    console.log(`Day ${totalWorkingDays}: Worked ${empHours} hours, Earned $${dailyWage}`);
}

// Display final results
console.log(`\nTotal Days Worked: ${totalWorkingDays}`);
console.log(`Total Hours Worked: ${totalWorkingHours}`);
console.log(`Total Wage Earned: $${totalEmpWage}`);

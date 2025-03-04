// Constants for Employee Work Types
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get working hours using Arrow Function
const getWorkHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOURS;
        case IS_FULL_TIME: return FULL_TIME_HOURS;
        default: return 0; // No work
    }
};

// Array to store daily work details using Objects
let employeeWorkDetails = [];
let totalWorkingHours = 0;
let totalWorkingDays = 0;

// Simulating Employee Wage Calculation
while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3); // Randomly assign work type
    let empHours = getWorkHours(empCheck);

    // Ensure not to exceed max hours
    if (totalWorkingHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkingHours;
    }

    totalWorkingHours += empHours;
    totalWorkingDays++;
    let dailyWage = empHours * WAGE_PER_HOUR;

    // Store work details in Object
    employeeWorkDetails.push({
        day: totalWorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    });
}

// **(a) Calculate Total Wage and Total Hours Worked using Arrow Function**
const totalWage = employeeWorkDetails.reduce((total, emp) => total + emp.wageEarned, 0);
const totalHours = employeeWorkDetails.reduce((total, emp) => total + emp.hoursWorked, 0);

// **(b) Show Full Working Days using forEach**
console.log("Full Working Days:");
employeeWorkDetails.forEach(emp => {
    if (emp.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${emp.day}: ${emp.hoursWorked} hrs`);
    }
});

// **(c) Show Part Working Days using Map (Reducing to String Array)**
const partWorkingDays = employeeWorkDetails
    .filter(emp => emp.hoursWorked === PART_TIME_HOURS)
    .map(emp => `Day ${emp.day}`);
console.log("Part Working Days:", partWorkingDays.join(", "));

// **(d) Show No Working Days using Map Function**
const noWorkingDays = employeeWorkDetails
    .filter(emp => emp.hoursWorked === 0)
    .map(emp => `Day ${emp.day}`);
console.log("No Working Days:", noWorkingDays.join(", "));

// **Print Total Wage and Hours**
console.log(`Total Wage Earned: $${totalWage}`);
console.log(`Total Hours Worked: ${totalHours} hrs`);

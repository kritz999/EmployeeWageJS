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

// Variables to track employee work details
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map();
let dailyHourMap = new Map();

// Simulate employee work over a month (max 20 days or 160 hours)
while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3); // Randomly assign work type
    let empHours = getWorkHours(empCheck);
    
    // Ensure max limit is not exceeded
    if (totalWorkingHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalWorkingHours;
    }

    totalWorkingHours += empHours;
    totalWorkingDays++;
    let dailyWage = empHours * WAGE_PER_HOUR;

    dailyWageMap.set(totalWorkingDays, dailyWage); // Store Day-wise Wage
    dailyHourMap.set(totalWorkingDays, empHours);  // Store Day-wise Hours
}

// **(a) Calculate Total Wage and Total Hours Worked using Arrow Functions**
let totalWage = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
let totalHours = Array.from(dailyHourMap.values()).reduce((total, hours) => total + hours, 0);

// **(b) Categorize Work Days using Arrow Function**
let fullWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day, hours]) => day);
let partWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day, hours]) => day);
let noWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 0).map(([day, hours]) => day);

// **Print Results**
console.log(`Total Wage Earned: $${totalWage}`);
console.log(`Total Hours Worked: ${totalHours} hrs`);
console.log(`Full Working Days: ${fullWorkingDays}`);
console.log(`Part Working Days: ${partWorkingDays}`);
console.log(`No Working Days: ${noWorkingDays}`);

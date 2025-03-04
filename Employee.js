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

// Variables to track total working hours, days, and wages
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let dailyWageArray = []; // Array to store daily wages
let dailyWageMap = new Map(); // Map to store day-wise wage

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
    dailyWageArray.push(dailyWage); // Store daily wage in array
    dailyWageMap.set(totalWorkingDays, dailyWage); // Store in map (key: day, value: wage)
}

// **(a) Calculate total Wage using reduce method**
let totalEmpWage = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`\nTotal Wage Earned: $${totalEmpWage}`);

// **(b) Show the Day along with Daily Wage using map helper function**
let dayWithWages = dailyWageArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("\nDaily Wages with Day:");
console.log(dayWithWages);

// **(c) Show Days when Full Time Wage of $160 was earned using filter function**
let fullTimeWageDays = [...dailyWageMap.entries()]
    .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(([day, wage]) => `Day ${day}`);
console.log("\nDays when Full-Time Wage ($160) was earned:");
console.log(fullTimeWageDays);

// **(d) Find the first occurrence when Full Time Wage was earned using find function**
let firstFullTimeDay = [...dailyWageMap.entries()].find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nFirst Full-Time Wage Earned on: Day ${firstFullTimeDay[0]}`);

// **(e) Check if Every Element of Full Time Wage is truly holding Full time wage using every**
let isAllFullTimeWage = dailyWageArray.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nIs every wage a Full-Time Wage? ${isAllFullTimeWage}`);

// **(f) Check if there is any Part-Time Wage using some function**
let hasPartTimeWage = dailyWageArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nIs there any Part-Time Wage? ${hasPartTimeWage}`);

// **(g) Find the number of days the Employee Worked using filter function**
let totalDaysWorked = dailyWageArray.filter(wage => wage > 0).length;
console.log(`\nTotal Number of Days Employee Worked: ${totalDaysWorked}`);

class EmployeePayroll {
    constructor(id, name, gender, startDate, hoursWorked, wageEarned) {
        this.id = this.validateId(id);          // Validate Employee ID
        this.name = this.validateName(name);    // Validate Name
        this.gender = this.validateGender(gender); // Validate Gender
        this.startDate = this.validateStartDate(startDate); // Validate Start Date
        this.hoursWorked = this.validatePositiveNumber(hoursWorked, "Hours Worked");
        this.wageEarned = this.validatePositiveNumber(wageEarned, "Wage Earned");
    }

    // Employee ID and Salary Validation
    validateId(id) {
        try {
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error(`Invalid Employee ID: ${id}. Must be a positive non-zero integer.`);
            }
            return id;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    validatePositiveNumber(value, fieldName) {
        try {
            if (typeof value !== "number" || value <= 0) {
                throw new Error(`Invalid ${fieldName}: ${value}. Must be a positive number.`);
            }
            return value;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    // Name Validation Function
    validateName(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        try {
            if (!nameRegex.test(name)) {
                throw new Error(`Invalid Name: "${name}". Name must start with a capital letter and have at least 3 characters.`);
            }
            return name;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    // Gender Validation (Only 'M' or 'F' allowed)
    validateGender(gender) {
        const genderRegex = /^[MF]$/;
        try {
            if (!genderRegex.test(gender)) {
                throw new Error(`Invalid Gender: "${gender}". Must be 'M' or 'F'.`);
            }
            return gender;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    // Start Date Validation (Must not be in the future)
    validateStartDate(date) {
        try {
            let parsedDate = new Date(date);
            let today = new Date();
            if (isNaN(parsedDate.getTime()) || parsedDate > today) {
                throw new Error(`Invalid Start Date: "${date}". Cannot be a future date.`);
            }
            return parsedDate;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    // Method to display employee details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Start Date: ${this.startDate ? this.startDate.toDateString() : "Invalid Date"}, Hours: ${this.hoursWorked}, Wage: $${this.wageEarned}`;
    }
}

// Array to store employee records
let employeePayrollData = [];

employeePayrollData.push(new EmployeePayroll(1, "Alice", "F", "2024-02-15", 160, 3200));
employeePayrollData.push(new EmployeePayroll(-2, "Bob", "M", "2024-02-15", 120, 2400));  // Invalid ID
employeePayrollData.push(new EmployeePayroll(3, "Charlie", "X", "2024-01-10", 140, 2800)); // Invalid Gender
employeePayrollData.push(new EmployeePayroll(4, "Diana", "F", "2025-03-05", 100, 2000)); // Future Date
employeePayrollData.push(new EmployeePayroll(5, "Eve", "F", "2024-02-01", 0, 2000)); // Invalid Hours Worked

// **Display Valid Employee Payroll Data**
console.log("\nValid Employee Payroll Details:");
employeePayrollData.forEach(emp => {
    if (emp.id && emp.name && emp.gender && emp.startDate && emp.hoursWorked && emp.wageEarned) {
        console.log(emp.getDetails());
    }
});

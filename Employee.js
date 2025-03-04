class EmployeePayroll {
    constructor(id, name, gender, startDate, hoursWorked, wageEarned) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert string to Date object
        this.hoursWorked = hoursWorked;
        this.wageEarned = wageEarned;
    }

    // Method to display employee details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}, Hours: ${this.hoursWorked}, Wage: $${this.wageEarned}`;
    }
}

// Array to store employee records
let employeePayrollData = [];

// Adding employee records
employeePayrollData.push(new EmployeePayroll(1, "Alice", "Female", "2024-03-01", 160, 3200));
employeePayrollData.push(new EmployeePayroll(2, "Bob", "Male", "2024-02-15", 120, 2400));
employeePayrollData.push(new EmployeePayroll(3, "Charlie", "Male", "2024-01-10", 140, 2800));
employeePayrollData.push(new EmployeePayroll(4, "Diana", "Female", "2024-03-05", 100, 2000));

// **Display Employee Payroll Data**
console.log("Employee Payroll Details:");
employeePayrollData.forEach(emp => console.log(emp.getDetails()));

class EmployeePayroll {
    constructor(id, name, gender, startDate, hoursWorked, wageEarned) {
        this.id = id;
        this.name = this.validateName(name); // Validate Name
        this.gender = gender;
        this.startDate = new Date(startDate);
        this.hoursWorked = hoursWorked;
        this.wageEarned = wageEarned;
    }

    // Name Validation Function
    validateName(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Regex Pattern
        try {
            if (!nameRegex.test(name)) {
                throw new Error(`Invalid Name: "${name}". Name must start with a capital letter and have at least 3 characters.`);
            }
            return name;
        } catch (error) {
            console.error(error.message);
            return null; // Returning null to indicate invalid name
        }
    }

    // Method to display employee details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}, Hours: ${this.hoursWorked}, Wage: $${this.wageEarned}`;
    }
}

// Array to store employee records
let employeePayrollData = [];

employeePayrollData.push(new EmployeePayroll(1, "Alice", "Female", "2024-03-01", 160, 3200));
employeePayrollData.push(new EmployeePayroll(2, "bob", "Male", "2024-02-15", 120, 2400)); // Invalid name (lowercase)
employeePayrollData.push(new EmployeePayroll(3, "Ch", "Male", "2024-01-10", 140, 2800)); // Invalid name (less than 3 chars)
employeePayrollData.push(new EmployeePayroll(4, "Diana", "Female", "2024-03-05", 100, 2000));

// **Display Employee Payroll Data**
console.log("Employee Payroll Details:");
employeePayrollData.forEach(emp => {
    if (emp.name) console.log(emp.getDetails()); // Only display valid entries
});

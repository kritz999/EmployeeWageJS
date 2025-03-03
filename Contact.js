// AddressBook.js

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!this.validateName(firstName) || !this.validateName(lastName)) {
            throw new Error("First and Last Name should start with a capital letter and have at least 3 characters.");
        }
        if (!this.validateAddress(address) || !this.validateAddress(city) || !this.validateAddress(state)) {
            throw new Error("Address, City, and State should have at least 4 characters.");
        }
        if (!this.validateZip(zip)) {
            throw new Error("Invalid Zip Code format.");
        }
        if (!this.validatePhone(phone)) {
            throw new Error("Invalid Phone Number format.");
        }
        if (!this.validateEmail(email)) {
            throw new Error("Invalid Email format.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString = () => `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Ph: ${this.phone}, Email: ${this.email}`;

    validateName = name => /^[A-Z][a-zA-Z]{2,}$/.test(name);
    validateAddress = value => /^.{4,}$/.test(value);
    validateZip = zip => /^[0-9]{5,6}$/.test(zip);
    validatePhone = phone => /^[0-9]{10}$/.test(phone);
    validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

class Employee {
    constructor(id, salary, gender, date) {
        try {
            if (!this.validateId(id)) {
                throw new Error("Employee ID must be a non-zero positive number.");
            }
            if (!this.validateSalary(salary)) {
                throw new Error("Salary must be a non-zero positive number.");
            }
            if (!this.validateGender(gender)) {
                throw new Error("Gender must be 'M' or 'F'.");
            }
            if (!this.validateDate(date)) {
                throw new Error("Date cannot be in the future.");
            }
            this.id = id;
            this.salary = salary;
            this.gender = gender;
            this.date = date;
        } catch (error) {
            console.error(error.message);
        }
    }

    validateId = id => /^\d+$/.test(id) && id > 0;
    validateSalary = salary => /^\d+$/.test(salary) && salary > 0;
    validateGender = gender => /^[MF]$/.test(gender);
    validateDate = date => {
        let inputDate = new Date(date);
        let today = new Date();
        return inputDate <= today;
    };
}

// Example Usage
try {
    let employee1 = new Employee(101, 50000, 'M', '2024-02-15');
    let employee2 = new Employee(-5, 20000, 'X', '2026-01-01'); // Will throw error
} catch (error) {
    console.error(error.message);
}

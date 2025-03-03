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

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact = contact => {
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Contact with this name already exists!");
        }
        this.contacts.push(contact);
    };

    removeContactByName = (firstName, lastName) => {
        this.contacts = this.contacts.filter(contact => contact.firstName !== firstName || contact.lastName !== lastName);
    };

    updateContactByName = (firstName, lastName, updatedDetails) => {
        let contact = this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (!contact) throw new Error("Contact not found!");
        Object.assign(contact, updatedDetails);
    };

    searchContactsByCity = city => this.contacts.filter(contact => contact.city === city);
    searchContactsByState = state => this.contacts.filter(contact => contact.state === state);
    viewPersonsByCity = city => this.searchContactsByCity(city).map(contact => contact.toString());
    viewPersonsByState = state => this.searchContactsByState(state).map(contact => contact.toString());
    getContactCount = () => this.contacts.length;
    getContactCountByCity = city => this.searchContactsByCity(city).length;
    getContactCountByState = state => this.searchContactsByState(state).length;
    
    sortContactsByName = () => this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    sortContactsByCity = () => this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    sortContactsByState = () => this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    sortContactsByZip = () => this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
}

class AddressBookSystem {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook = name => {
        if (this.addressBooks.some(book => book.name === name)) {
            throw new Error("Address Book with this name already exists!");
        }
        let newBook = new AddressBook(name);
        this.addressBooks.push(newBook);
    };

    getAddressBook = name => this.addressBooks.find(book => book.name === name);
}

// Employee Wage Problem using Arrow Functions and Objects
const EMP_RATE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;
const MAX_HOURS = 160;

const getWorkHours = (attendance) => attendance === 'FullTime' ? FULL_DAY_HOURS : attendance === 'PartTime' ? PART_TIME_HOURS : 0;

let dailyWages = [];
let totalHours = 0;
let totalWage = 0;

for (let day = 1; day <= WORKING_DAYS && totalHours <= MAX_HOURS; day++) {
    let attendance = Math.random() < 0.5 ? 'FullTime' : 'PartTime';
    let workHours = getWorkHours(attendance);
    totalHours += workHours;
    let dailyWage = workHours * EMP_RATE_PER_HOUR;
    dailyWages.push({ day, workHours, dailyWage });
    totalWage += dailyWage;
}

console.log("Total Wage: ", totalWage);
console.log("Daily Wages: ", dailyWages);
console.log("Days with Full Time Wage: ", dailyWages.filter(wage => wage.dailyWage === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));
console.log("First Full Time Wage Day: ", dailyWages.find(wage => wage.dailyWage === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));
console.log("All are Full Time Wages: ", dailyWages.every(wage => wage.dailyWage === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));
console.log("Any Part Time Wage: ", dailyWages.some(wage => wage.dailyWage === PART_TIME_HOURS * EMP_RATE_PER_HOUR));
console.log("Total Days Worked: ", dailyWages.length);

// Usage Example
try {
    let system = new AddressBookSystem();
    system.createAddressBook("Personal");
    let personalBook = system.getAddressBook("Personal");
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "New York", "10001", "1234567890", "john.doe@example.com");
    personalBook.addContact(contact1);
    personalBook.sortContactsByName();
} catch (error) {
    console.error(error.message);
}

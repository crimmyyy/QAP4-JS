// this is where the main customer object is

//determines the motelcustomer as its own class. these will be used later on in the script to assign each variable in the class to show something in the browser.

class MotelCustomer {
    constructor(name, birthDate, gender, roomPreferences, paymentMethod, mailingAddress, phoneNumber, checkInDate, checkOutDate) {
        this.name = name;
        this.birthDate = new Date(birthDate);
        this.gender = gender;
        this.roomPreferences = roomPreferences;
        this.paymentMethod = paymentMethod;
        this.mailingAddress = mailingAddress;
        this.phoneNumber = phoneNumber;
        this.checkInDate = new Date(checkInDate);
        this.checkOutDate = new Date(checkOutDate);
    }
//gets the customer's age
    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }
// determines stay duration.
    getStayDuration() {
    const diffTime = Math.abs(this.checkOutDate - this.checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
    }
// description of the customer.
    getDescription() {
        return `
        <p>Customer Name: ${this.name}</p>
        <p>Age: ${this.getAge()}</p>
        <p>Gender: ${this.gender}</p>
        <p>Room Preferences: ${this.roomPreferences.join(', ')}</p>
        <p>Payment Method: ${this.paymentMethod}</p>
        <p>Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.prov}, ${this.mailingAddress.zip}</p>
        <p>Phone Number: ${this.phoneNumber}</p>
        <p>Check-in Date: ${this.checkInDate.toDateString()}</p>
        <p>Check-out Date: ${this.checkOutDate.toDateString()}</p>
        <p>Duration of Stay: ${this.getStayDuration()} days</p>
        `;
    }
// logs everything in the console, along with displaying in the HTML.
logDescription() {
    console.log(`Customer Name: ${this.name}`);
    console.log(`Age: ${this.getAge()}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Room Preferences: ${this.roomPreferences.join(', ')}`);
    console.log(`Payment Method: ${this.paymentMethod}`);
    console.log(`Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.prov}, ${this.mailingAddress.zip}`);
    console.log(`Phone Number: ${this.phoneNumber}`);
    console.log(`Check-in Date: ${this.checkInDate.toDateString()}`);
    console.log(`Check-out Date: ${this.checkOutDate.toDateString()}`);
    console.log(`Duration of Stay: ${this.getStayDuration()} days`);
    }
}

// determines the customer as a constant, then makes them a new motel customer. The following information is stored on the html page itself, along with the console.

const customer = new MotelCustomer(
    "Scarlett Budgell",
    "2003-07-18",
    "Female",
    ["Vape-friendly", "King sized bed", "Pool view"],
    "Debit Card",
    { street: "123 Sesame Street", city: "St. John's", prov: "NL", zip: "A1A5H5" },
    "709-725-4707",
    "2024-07-20",
    "2024-07-25"
);


if (customer) {
document.getElementById('customer-description').innerHTML = customer.getDescription();
customer.logDescription();
}

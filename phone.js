// Task: CRUD Functionality

// Create a simple phone book application functionality using JavaScript objects. 
// Your application should allow users to add new contacts, search for contacts by name,
//  update existing contacts, and delete contacts.
// Add a new contact:
//   Allow users to add a new contact by providing their name, phone number, and email address.
//   Search for a contact:
//    Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
//    Update a contact: 
//    Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
//    Delete a contact: Allow users to delete a contact by entering their name.
//    Feel free to reach out if you have any questions.

// using   object 
// factory function 
// array,array methiod
// addContact("name","phoneno","email");

function CreateContact(name, phoneNumber, email) {
    return {
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
}

let phoneBook = [];
function AddContact(name, phoneNumber, email) {
    let contact = CreateContact(name, phoneNumber, email);
    phoneBook.push(contact);
    console.log(phoneBook);
}
function SearchContact(name) {
    let found = phoneBook.find(contact => contact.name === name);
    if (found) {
        console.log("Available :");
        console.log("Name:", found.name);
        console.log("Phone Number:", found.phoneNumber);
        console.log("Email:", found.email);
    } else {
        console.log(" Not Available");
    }
}

function UpdateContact(name, newPhoneNumber, newEmail) {
    let found = phoneBook.find(contact => contact.name === name);
    if (found) {
        found.phoneNumber = newPhoneNumber;
        found.email = newEmail;
        console.log("Update :");
    } else {
        console.log("Not Available");
    }
}

function DeleteContact(name) {
    let index = phoneBook.findIndex(contact => contact.name === name);
    if (index !== -1) {
        phoneBook.splice(index, 1);
        console.log(" Deleted :");
    } else {
        console.log("Not Available");
    }
}

AddContact("Trupti Bhojane", "7527451320", "truptibhojane99@gmail.com");
AddContact("Sakshi Nimkar", "9821489036", "sakshinimkar@45gmail.com");

SearchContact("Trupti Bhojane");
SearchContact("Sakshi Nimkar");
SearchContact("Sonal");

UpdateContact("Trupti Bhojane", "1234567899", "truptibhojane99@gmail.com");
SearchContact("Trupti Bhojane");

DeleteContact("Sakshi Nimkar");
SearchContact("Sakshi Nimkar");


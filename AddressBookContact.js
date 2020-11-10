class AddressBookContact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName =firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip =zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    
    toString(){
        return "first name: "+this.firstName+", last name: "+this.lastName+", address: "+this.address+", city: "+this.city+
            ", state: "+this.state+", zip: "+this.zip+", phone number: "+this.phoneNumber+", email: "+this.email;
    }
}

let contact = new AddressBookContact("Ganesh","Rapeti","1-51A,Akp","Anaka","Andhrapradesh","400088","9877665544","gani@abc.com");
console.log(contact);
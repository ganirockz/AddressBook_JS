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
        let nameRegex = RegExp("[A-Z]{1}[a-z]{2,}");
        if(nameRegex.test(firstName)){
        this.firstName =firstName;}
        else{
            throw "Invalid first name";
        }
        if(nameRegex.test(lastName)){
        this.lastName = lastName;}
        else{
            throw "Invalid last name";
        }
        let commonRegex = RegExp("[a-zA-Z0-9-,]+");
        if(commonRegex.test(address) && commonRegex.test(city) && commonRegex.test(state)){
        this.address = address;
        this.city = city;
        this.state = state;}
        else{
            throw 'Invalid address or city or state';
        }
        let zipRegex = RegExp("[1-9][0-9]{5}");
        if(zipRegex.test(zip)){
        this.zip =zip;}else{
            throw "Invalid zip code";
        }
        let phoneNumberRegex = RegExp("[1-9]{1}[0-9]{9}");
        if(phoneNumberRegex.test(phoneNumber)){
        this.phoneNumber = phoneNumber;}
        else{
            throw "Invalid phone number";
        }
        let emailRegex = RegExp("^([a][b][c])[_+-.]([a-zA-Z]+)[@]([b][r][i][d][g][e][l][a][b][z][.][c][o])[.]([a-zA-Z]{2})$");
        if(emailRegex.test(email)){
        this.email = email;}
        else{
            throw "Invalid email address";
        }
    }
    
    toString(){
        return "first name: "+this.firstName+", last name: "+this.lastName+", address: "+this.address+", city: "+this.city+
            ", state: "+this.state+", zip: "+this.zip+", phone number: "+this.phoneNumber+", email: "+this.email;
    }
}
try{
let contact = new AddressBookContact("Ganesh","Rapeti","1-51A,Akp","Anaka","Andhrapradesh","400088","9877665544","ab.xyz@bridgelabz.co.in");
console.log(contact);
}catch(e){
    console.error(e);
}

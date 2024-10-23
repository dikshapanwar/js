class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}
const chai = new User("di@gmail.com", "dikshgbgbg")
console.log(chai.email);
console.log(chai.password);

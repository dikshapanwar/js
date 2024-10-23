//1.Function Based Getter And Setter
// function user(email, password) {
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase()
//         },
//         set: function (value) {
//             this._password = value
//         }
//     })
// }

// const chai = new user("diksha@gmail.com", "dffhd**vbjvbj")
// console.log(chai.password);
// console.log(chai.email);

//2.Object Based Getter Setter
const User = {
    _email: "Chai@gmail.com",
    _password: "chaiorcodewithcoffee",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    }
}


console.log(User.password);
console.log(User.email);
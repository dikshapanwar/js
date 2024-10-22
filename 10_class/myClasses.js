class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}AbCaBDj`
    }
    changeUserName(){
return `${this.username.toUpperCase()}`
    }
}

const chai=new User("dikshu","di@gmail.com","12222r345")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


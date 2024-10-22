function setUserName(username){
    this.username=username
    console.log("called");
}
function createUser(username,email,password){
    setUserName.call(this,username)
this.email=email,
this.password=password
}
const chai=new createUser("dikshu","haa@gmail.com","dik2704")
console.log(chai);

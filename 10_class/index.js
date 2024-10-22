class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password) {
      super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New Course was added by ${this.username}`);
        
    }
}
const chai=new Teacher("diksha","di@gmail.com","12445")
chai.addCourse()
console.log(chai);
const tea= new User("Manisha") 
tea.logMe()

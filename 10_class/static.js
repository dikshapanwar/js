class User{
    constructor(username){
        this.username=username
     
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
   static  createId(){
        const randomId=Math.random()*100 +1 ;
        const randomString="yfdbscyhbshcbwcfbhchc"
        const id=randomId+randomString
        return id;
        // return `12344`
    }
}



class Teacher extends User{
    constructor(username,email) {
      super(username)
        this.email=email
       // this.password=password
    }
}


const chai=new User("Diksha");
const tea=new Teacher("dikta","dik@gmail.com")
//console.log(chai.createId());
tea.logMe()
//console.log(tea.createId());

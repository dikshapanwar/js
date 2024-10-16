const user={
    username:"Diksha",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome To Webiste`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// console.log(user.welcomeMessage());
// console.log(this);


//************************************************Arrow Function*******************************************
// function chai()
// {
//     let userName="diksha"
//     console.log(this.userName);
    
// }

// chai();

// const chai =function()
// {
//     let userName="diksha"
//      console.log(this.userName);
// }
const chai =()=>
{
    let userName="diksha"
     console.log(this.userName);
}
// chai()


// const addTwo=(num1,num2)=>{              =>BASIC AROW FUNCTION
// return num1+num2;
// }
// const addTwo=(num1,num2)=>num1+num2;       //=>implicated Arrow Function
     
// const addTwo=(num1,num2)=>(num1+num2) 

const addTwo=(num1,num2)=>({name:"DIKSHA PANWAR"}) 
console.log(addTwo(5,5));


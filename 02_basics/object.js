//SINGLETON
// Object.create
//Obejct literals

const mySymbol=Symbol("key1")

const jsUser = {
    name: "Diksha",
    fullName:"Diksha Panwar",
    [mySymbol]:"mykey1",
    age: 21,
    location: "Nahan",
    email: "diksha@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Sunday","Friday"]
}
// console.log(jsUser.age);
// console.log(jsUser["age","name","mySymbol"]);
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);

// jsUser.email="manisha@gmail.com"
//  console.log(jsUser["email"]);
//Object.freeze(jsUser);
// jsUser.email="diksha@gmail.com"
// console.log(jsUser["email"]);

// console.log(jsUser);


jsUser.greeting =function()
{
    console.log("Hello Js User");
    
}
jsUser.greetingTwo =function()
{
    console.log(`Hello Js ${this.name} ,How Are you`);
    
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



//++++++++++++++++++++++++++++***********************02 Object Basics***********************************+++++++++++++++++++++++++++++++++++
//  const tinderUser= new Object();
const tinderUser ={}
tinderUser.id="123ABCUY";
tinderUser.name="USer";
tinderUser.email="user@gmail.com";
tinderUser.isLoggedIn=false
//  console.log(tinderUser);


const regularUser={
    email:"diksha@gmail.com",
    fullname:{
userfullname:{
    firstname:"Diksha",
    lastname:"Panwar"
}
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

 
//Merge object

const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
const obj2={
    4:"e",
    5:"f",
    6:"g",
    7:"h"
}

// const obj3={...obj1,...obj2};
const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));

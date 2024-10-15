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
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

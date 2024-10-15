//1.STACK(PRIMITIVE //Call by value)

let myName="DIKSHA ";
let anotherName=myName;
anotherName="DIKSHANT";
// console.log(myName);
// console.log(anotherName);


// its give us a copy of the value of the variable

//2.HEAP(NON-PRIMITIVE //Call by reference)
let userOne={
    email:"diksha@gmail.com",
    upi:"diksha@ybl"
}

let userTwo=userOne;
userTwo.email="diksha@google.com";
console.log(userOne.email);
console.log(userTwo.email);

//it give us refrence of value of the variable
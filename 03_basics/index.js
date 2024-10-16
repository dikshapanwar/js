

function sayMyName(){
    console.log("d");
    console.log("i");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    
}

//sayMyName();  Execution of function

// function addTwoNumber()
// {
//     const num1 =20;
//     const num2=20;

//     const num3=num1+num2;
//     console.log(num3);
    
// }

// addTwoNumber();


// function addTwoNumber(num1 ,num2)
// {
// console.log(num1+num2);
// }
function addTwoNumber(num1 ,num2)
{
//  let result=num1 +num2;
// return result;

return num1+num2;
}

// const result =addTwoNumber(60,40);
//console.log("Result",result);

function loginMessageUser(username){
    // if(username === undefined)
    // {
    //   console.log("Please Enter Your Name");
    //   return
    // }
    if (!username) {
        console.log("Please enter your name");
        return;
    }
    else{
        return `${username} logged in` 
    }
   
}
// const result =loginMessageUser("Diksha");
// console.log(result);
// console.log(loginMessageUser());


function calculateCartPrize(...num1){
 return num1;
}

// console.log(calculateCartPrize(29,30,32));

const user ={
    name:"diksha",
    age:21,
}

function handleObject(anyobject){
console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);

}

// handleObject(user);


const myNewArr  =[200,100,30,20,10,400,1000];

function returnSecondValue(getArr)
{
return getArr[1];

}

console.log(returnSecondValue(myNewArr));

//1.if
// if (2 ==="2") {
//     console.log(true);  
// }


// 2.IF ELSE
// const temp= 58
// if (temp <50) {
//     console.log("temp is less than 50"); 
// } else {
//     console.log("temp is greater than 50");   
// }


//
// const score=200
// if (score > 100) {
//     const power="fly"
//     console.log(`User 's Power: ${power}`);
    
// }



// const balance =1000
// if (balance <500) {
//     console.log("less than 500");
    
// }else if(balance <750)
// {
//     console.log("less than 750 ");
// }
// else if(balance <900){
//     console.log("less than 900 ");

// }
// else{
//     console.log("less than 1200 ");

// }

const userLoggedIn =true
const debitCard =true
const loggedfromGoogle =false
const loggedInFromEmail =true


if (userLoggedIn && debitCard) {
    console.log("Allow to Shoping");
    
}
if (loggedfromGoogle || loggedInFromEmail) {
    console.log("ALLowd to buy Course");
    
}
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
    //    console.log("Async Task Is Complete");
        resolve(); 
    }, 1000);
});
promiseOne.then(() => {
   // console.log("PROMISE CONSUME");
});
//2.PROMISE

new Promise(function(resolve, reject){
    setTimeout(function() {
      //  console.log("Async Task Is Complete Again");
        resolve(); 
    }, 1000);
}).then(() => {
   // console.log("PROMISE CONSUME AGAIN");
});

//3.
const promisThree = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"Diksha",email:"unkown@gmail.com"}); 
    }, 1000);
})

promisThree.then((user)=>{
//console.log(user);
})

//4.
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function() {
       let erorr=true;
       if (!erorr) {
        resolve({username:"Diksha",email:"unkown@gmail.com"})
       }else{
        reject('ERROR:,Something Went Wrong' )
       }
    }, 1000);
})


promiseFour.then((user)=>{
//console.log(user);
return user.username
}).then((username)=>{
//console.log(username);
}).catch((err)=>{
  //  console.log(err);
}).finally(()=>{
  //  console.log("Promise Is Resolve Either Reject");
})

//5.
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function() {
        let erorr=false;
        if (!erorr) {
         resolve({username:"Manisha",email:"unkown@gmail.com"})
        }else{
         reject('ERROR:,Something Went Wrong' )
        }
     }, 1000);
})

async function consumePromiseFive(){
  try{
    const data=  await promiseFive
 // console.log(data);
  }
  catch(err){
//console.log(err);

  }
  
}
//consumePromiseFive()

//6.
async function getAllUsers(){
 try{
    const data=   await fetch('https://jsonplaceholder.typicode.com/users');
const response= await data.json()
console.log(response);
 }catch(err){
console.log(err);

 }
}

getAllUsers()
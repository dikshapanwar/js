const myNumbers=[1,2,3,4,5,6,7,8,9,10]
 
// let mynums = myNumbers.map( (num)=> {
//     return num +10
//     } )


let myNums =myNumbers.map((num)=>{
    return num *10
}).map((num) => {
    return num+1    //=>CHANING
}).filter((num)=>{
    return num >=70
})
   // console.log(myNums);


   
    
    

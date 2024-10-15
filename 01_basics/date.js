let myDate =new Date();//=>OBJECT
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
//console.log(typeof myDate)


// let myCreatedDate= new Date(2023,0,23);
// let myCreatedDate= new Date(2023,0,23,5,3);
//let myCreatedDate= new Date("2024-04-27");//yyyy-mm-dd
let myCreatedDate= new Date("04-27-2003");
//console.log(myCreatedDate.toLocaleString());

//TIMESTAMP

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());log
//console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));

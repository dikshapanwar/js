let myArr =[0,1,2,3,4,5,6,7,8,9];

let newArr= new Array(1,2,3,4,5,6,7);
// console.log(myArr[1]);
// console.log(fruits);
// console.log(newArr);


//Array Methods
// myArr.push(10,11);
// myArr.pop();
// myArr.unshift(3);
// myArr.shift()
//console.log(myArr.includes(9));
// console.log(myArr.indexOf(0));

let newArr2=myArr.join();


// console.log( typeof myArr);
// console.log( typeof newArr2);

//2. SLice And Splice
// console.log("A",myArr);

const myArray=myArr.slice(1,3);
// console.log(myArray);

// console.log("B",myArr);
const myArray2=myArr.splice(1,3);
// console.log("C",myArr);
// console.log(myArray2);



//02 ARRAY BASICS
let fruits =["Apple","Banana","Cherry","Grapes","Orange"];
const vegetable =["Pumkin,Birnjal","Onion","Patato","Tamato"];

// fruits.push(vegetable);
//console.log(fruits);
// console.log(fruits[5]);

//COnacat
// const all=fruits.concat(vegetable);
// console.log(all);
// console.log(all[7]);


//3.Spread
const SpreadFalFruits=[...fruits,...vegetable];
// console.log(SpreadFalFruits);

const anotherArray=[1,2,3,[4,5,6,7],8,[6,7,8,[4,5,3]]];
const otherArray=anotherArray.flat(Infinity);
// console.log(otherArray);


// console.log(Array.isArray("Diksha"));
// console.log(Array.from("Diksha"));

// console.log(Array.from({name:"Diksha"}));//OBJECT IS NOT CONVERT IN ARRAY USING FROM 

let score1=100;
let score2 =300;
let score3 =500;

console.log(Array.of(score1,score2,score3));


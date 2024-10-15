let myArr =[0,1,2,3,4,5,6,7,8,9];
let fruits =["Apple","Banana","Cherry","Grapes","Orange"];
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
console.log("A",myArr);

const myArray=myArr.slice(1,3);
console.log(myArray);

console.log("B",myArr);
const myArray2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myArray2);

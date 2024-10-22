// let myName = "Diksha panwar    ";
// Object.prototype.trueLength = function() {    =>with the help of replace
//    return this.replace(/\s+/g, '').length; 
// }
// console.log(myName.trueLength()); 

let myName = "Diksha panwar    ";
String.prototype.trueLength = function() {         //=>With the help of Trim
   return this.trim().length; 
}
console.log(myName.trueLength());




let fruits=["Apple","Banana","Cherry","PineApple"]
let fruitsColor={
    Apple:"red",
    Banana:"yellow",
    Cherry:"red",
    pineApple:"orange",
    getBananaColor:function(){
        console.log(`Banana color is ${this.Banana}`);
        
    }
}
//1.OBJECt
// Object.prototype.diksha=function(){
//     console.log(`Diksha is present in all object`);
    
// }

// fruitsColor.diksha()
//2.ARRAY
// Array.prototype.diksha=function(){
//     console.log(`Diksha is present in all object`);
// }
// fruits.diksha();

// fruitsColor.diksha()


// INHERITANCE
const user={
name:"Diksha",
email:"di@gmail.com"
}
const teacher={
    makeVideo:true
}

const teacherAssitance={
    isActive:false
}
const taSupport={
    makeAssingment:"JAVASCript ",
    fullTime:true,
    __proto__:teacherAssitance
}
teacher.__proto__=user

//2.MOrden Syntax
Object.getPrototypeOf(teacherAssitance,teacher)
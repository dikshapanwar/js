//FOR LOOP

// for (let index = 0; index <=10; index++) {
//     const element = index
//     if (element == 5) {
//         console.log("% is Best Number");
        
//     } else {
//         console.log("Nothing");
        
//     }
//     console.log(element);
    
// }


for (let index = 1; index <= 5; index++) {
    //console.log(`Outer Loop Value:${index}`);
    
    for (let i = 1; i <= 5; i++) {
       //console.log(`Inner Loop Value:${i} and Outer LOOP Value ${index}`);
       //console.log(index + '*' + i + '=' + index *i);
       
    }
}



//ARRAY

const myArr=["Apple","Banana","Cherry","Mango"]
//console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
    
}


//BREAK AND CONTINUE

// for (let index = 1; index <=10; index++) {    BREAK 
//     if (index ===5) {
//         console.log(`5`);
//         break;
        
//     }
//     console.log(`Value of index Is :${index}`);
    
// }
for (let index = 1; index <=10; index++) {
    if (index ===5) {
        console.log(`5`);
       continue
        
    }
    console.log(`Value of index Is :${index}`);
    
}


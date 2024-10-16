let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c=50;
}

// console.log(a);
//console.log(b);
//console.log(c);



function one() {
    const userName = "Diksha"
    function two() {
        const website = "youtube"
        console.log(userName);
        
    }
    //console.log(webiste);
    two()
}
// one()


//********************************Intersting  Example***************************************/
console.log(addOne(6));

function addOne(num)
{
    return num +1 
}


// console.log(addTwo(6)); error :because of Cannot access 'addTwo' before initialization

const addTwo=function(num){
    return num +2 
} 

console.log(addTwo(6));
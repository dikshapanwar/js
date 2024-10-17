const coding =["js","ruby","java","c++","c","html"]

coding.forEach(function (item) {
  //  console.log(item);
    
})


// coding.forEach( (item,index) =>{
//     console.log(item,index);
    
// })


const myCoding=[
    {
        language:"javascript",
        languageFileName:".js",
        
    },
    {
        language:"HTML",
        languageFileName:".html",

    },
    {
        language:"CSS",
        languageFileName:".css",

    },
    {
        language:"C++",
        languageFileName:".c++",

    }
]

myCoding.forEach( (item) => {
console.log(item.languageFileName);

})
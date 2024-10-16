(function chai(){
    console.log(`DB CONNECTED`);    //=>Named IIFE
})();

((name)=>{
    console.log(`DB CONNECTED two ,${name}`);  //=>Simple IIFE
})("Diksha")
// chai()
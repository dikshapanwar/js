// const buttons=document.querySelectorAll('.button')
// //console.log(buttons)
// const body=document.querySelector("body")
// buttons.forEach((item)=>{
//   // return console.log(item)
//   item.addEventListener('click',function(e){
//     if (e.target.id ==="grey") {
//     body.style.backgroundColor=e.target.id
//     }
//     if (e.target.id ==="white") {
//       body.style.backgroundColor=e.target.id
//       }
//       if (e.target.id ==="blue") {
//         body.style.backgroundColor=e.target.id
//         }
//         if (e.target.id ==="yellow") {
//           body.style.backgroundColor=e.target.id
//           }
//   })
// })


//Switch Statement
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((item) => {
  item.addEventListener('click', function(e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        break;
    }
  });
});

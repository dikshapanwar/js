const coding =["js","ruby","java","c++","c","html"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )
// console.log(values);

const num =[1,2,3,4,5,6,7,8,9,10]
// let values=num.filter((nums) => nums>5)

// let values=num.filter((nums) =>{
//     return nums > 5
// })



const newNum=[]
num.forEach( (item)=>{
    if (item >5) {
       newNum.push(item) 
    }
} )
//console.log(newNum);

const books = [
    { title: "The Great Gatsby", genre: "Fiction", publishDate: "1925" },
    { title: "1984", genre: "Dystopian", publishDate: "1949" },
    { title: "To Kill a Mockingbird", genre: "Fiction", publishDate: "1960" },
    { title: "Pride and Prejudice", genre: "Romance", publishDate: "1813" },
    { title: "The Catcher in the Rye", genre: "Fiction", publishDate: "1951" },
    { title: "Moby-Dick", genre: "Adventure", publishDate: "1851" },
    { title: "War and Peace", genre: "Historical Fiction", publishDate: "1869" },
    { title: "Brave New World", genre: "Dystopian", publishDate: "1932" },
    { title: "The Odyssey", genre: "Epic", publishDate: "8th century BC" },
    { title: "The Brothers Karamazov", genre: "Philosophical Fiction", publishDate: "1880" },
    { title: "Jane Eyre", genre: "Romance", publishDate: "1847"},
    { title: "The Hobbit", genre: "Fantasy", publishDate: "1937" },
    { title: "Ulysses", genre: "Modernist Fiction", publishDate: "1922" },
    { title: "The Divine Comedy", genre: "Epic Poetry", publishDate:"2004" },
    { title: "The Lord of the Rings", genre: "Fantasy", publishDate: "1954" }
  ];
// const userBooks=books.filter( (book)=>{
//     return book.genre==="Romance"
// } )

const userBooks=books.filter( (book)=>{
    return book.publishDate >=1900 && book.genre ==="Fiction" 
} )

console.log(userBooks);

  
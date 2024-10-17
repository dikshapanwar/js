const myNumber = [1, 2, 3,]

//const initialValue = 0;

let mytotal = myNumber.reduce((acc, currval) => {
    // console.log(`acc:${acc} and current value:${currval}`);

    return acc + currval
}, 0)

//console.log(mytotal);
const shoppingCart = [
    { id: 1, productName: 'Laptop', price: 999.99, quantity: 1, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 699.99, quantity: 1, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 199.99, quantity: 2, category: 'Accessories' },
    { id: 4, productName: 'Book', price: 19.99, quantity: 3, category: 'Books' },
    { id: 5, productName: 'Desk Chair', price: 149.99, quantity: 1, category: 'Furniture' },
    { id: 6, productName: 'Water Bottle', price: 14.99, quantity: 2, category: 'Home & Kitchen' },
    { id: 7, productName: 'Backpack', price: 49.99, quantity: 1, category: 'Fashion' },
    { id: 8, productName: 'Running Shoes', price: 89.99, quantity: 1, category: 'Fashion' },
    { id: 9, productName: 'Coffee Maker', price: 129.99, quantity: 1, category: 'Home Appliances' },
    { id: 10, productName: 'Monitor', price: 299.99, quantity: 1, category: 'Electronics' }
];
let cartPrice = shoppingCart.reduce((acc, item) =>  {
    console.log(`acc:${acc} and item 's price ${item.price}`);
    
  return acc+  item.price
}, 0)

console.log(cartPrice);

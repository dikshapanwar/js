const accountId=14457
let accountEmail="diksha@gmail.com"
var accountPassword="123456789"
accountCity="Nahan"
let accountState;//Undefined because we dont give this variable value

// accountId=12 not allowed beacause ,it is constant
accountEmail="dikshu@gmail.com"  //allowed beacuse it 's local variable
accountPassword="211121"  //allowed beacause it's a global variable
accountCity="Gadda"
console.log(accountCity)

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])
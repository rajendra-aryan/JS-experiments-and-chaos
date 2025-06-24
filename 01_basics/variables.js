const accountId = 144553
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "ANGUL"
let accountState;

// accountId = 2 // not allowed


accountEmail = "xy@xy.com"
accountPassword = "21212121"
accountCity = "BBSR"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let i = 1;
let result = "";

while(i <= n){
    result += i + " ";
    i++
}
console.log(result);
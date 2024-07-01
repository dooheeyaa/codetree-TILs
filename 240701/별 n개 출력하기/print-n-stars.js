const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let i = 1

while(i <= n){
    console.log('*');
    i++;
}
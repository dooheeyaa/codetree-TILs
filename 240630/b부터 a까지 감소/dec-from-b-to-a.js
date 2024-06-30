const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

let result = "";
for(i=b; i >= a; i--){
    result = result + i + " ";
}
console.log(result);
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

let result = "";
for(i = n; i <= 5 * n; i += n){
    result = result + i + " ";
}
console.log(result);
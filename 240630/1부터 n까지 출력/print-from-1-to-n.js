const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

let result = "";
for(i = 1 ; i <= n; i++){
    result = result + i + " ";
}
console.log(result);
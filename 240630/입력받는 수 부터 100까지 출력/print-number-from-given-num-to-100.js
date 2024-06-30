const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

let result = "";
for(n; n <= 100; n++){
    result = result + n + " ";
}
console.log(result);
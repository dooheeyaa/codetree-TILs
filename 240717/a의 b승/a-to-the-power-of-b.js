const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let array = input.map(x => Number(x));
let prod = 1;

for(let i = 1; i <= array[1]; i++){
    prod *= array[0];
}
console.log(prod);
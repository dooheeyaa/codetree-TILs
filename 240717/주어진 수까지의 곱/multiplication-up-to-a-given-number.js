const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let array = input.map(x => Number(x));
let prod = 1;

for(let i = array[0]; i <= array[1]; i++){
    prod *= i;
}

console.log(prod);
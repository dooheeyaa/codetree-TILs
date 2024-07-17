const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let array = input.map(x => Number(x));
let a = array[0];
let b = array[1];
let prod = 1;

for(let i = 1; i <= b; i++){
    if(i % a === 0){
        prod *= i;
    }
}
console.log(prod);
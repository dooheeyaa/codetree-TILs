const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let sum = 0;
let count = 0;

for(let i = 1; i < input.length; i++){
    let x = Number(input[i]);
    sum += x;
    count++;
}
console.log(sum, (sum / count).toFixed(1));
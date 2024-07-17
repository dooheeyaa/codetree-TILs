const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let sum = 0;
let count = 0;

for(let i = 0; i < input.length; i++){
    let x = Number(input[i]);
    if(x >= 0 && x <= 200){
        sum += x
        count++;
    }
}
console.log(sum, (sum/count).toFixed(1));
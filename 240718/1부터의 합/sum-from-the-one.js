const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let sum = 0;
let count = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
    count++;

    if(sum >= n){
        break;
    }
}
console.log(count);
const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

for(let i = 1; i < 5000; i++){
    n = parseInt(n / i);
    count++;

    if(n <= 1){
        break;
    }
}
console.log(count);
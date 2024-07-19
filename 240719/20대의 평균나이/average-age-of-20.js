const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
let sum = 0;
let count = 0;

while(true){
    let n = Number(input[index]);
    index ++;

    if(n >= 20 && n < 30){
        sum += n;
        count ++;
    }else{
        break;
    }
}
console.log((sum/count).toFixed(2));
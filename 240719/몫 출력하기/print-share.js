const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
let n = 0;

while(n <= 3){
    let number = Number(input[index]);
    n++;
    index++;

    if(number % 2 === 0){
        console.log(Math.floor(number / 2));
    }
}
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
let count = 0;

while(true){
    let number = Number(input[index]);
    index ++;

    if(number % 2 === 0){
        console.log(Math.floor(number / 2));
        count ++;
    }

    if(count === 3){
        break;
    }
}
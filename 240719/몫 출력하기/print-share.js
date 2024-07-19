const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
let count = 0;

while(count <= 3){
    let number = Number(input[index]);
    index ++;

    if(number % 2 === 0){
        console.log(Math.floor(number / 2));
        count ++;
    }
}
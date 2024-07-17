const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let array = input.map(x => Number(x));
let sum = 0;

for(let i = array[0]; i <= array[1]; i++){
    if( i % 6 === 0 && i % 8 !== 0){
        sum += i;
    }
}
console.log(sum);
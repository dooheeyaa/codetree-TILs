const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let result = '';

for(let i = a; i <= b; i++){
    if( i % 2 !== 0){
        result += i + ' ';
        i += i - 1
    }else{
        result += i + ' ';
        i += 2;
    }
}

console.log(result);
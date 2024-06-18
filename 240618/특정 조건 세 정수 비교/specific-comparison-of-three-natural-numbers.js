const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let result, result2

if(a <= b && a <= c){
    result = 1;
}else {
    result = 0;
}

if(a === b && b === c && a === c){
    result2 = 1;
}else {
    result2 = 0;
}

console.log(result, result2);
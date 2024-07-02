const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let c = input[0];
let n = Number(input[1]);
let result = "";
let result2 = "";

if(c === 'A'){
    for(i = 1; i <= n; i++){
        result += i + " ";
    }
}else{
    for(i = n; i >= 1; i--){
        result2 += i + " ";
    }
}

console.log(result);
console.log(result2);
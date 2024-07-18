const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let result = '';

for(let i = 1; 1 <= n; i++){
    if(i % 2 !== 0 && i % 10 !== 0 && i % 3 !== 0 && i % 9 === 0){
        result += i + ' ';
    }
}
console.log(result);
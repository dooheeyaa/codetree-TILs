const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

for(let i = 1; i <= n; i++){
    let x = input[i];
    if(x % 2 !== 0 && x % 3 === 0){
        console.log(x);
    }
}
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let cnt = 0;
let cnt2 = 0;

for(let i = 0; i < 10; i++){
    let x = Number(input[i]);

    if(x % 3 === 0){
        cnt++;
    }

    if(x % 5 === 0){
        cnt2++;
    }
}
console.log(cnt, cnt2);
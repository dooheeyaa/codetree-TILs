const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 0; // 윤년
let cnt2 = 0; // 평년

for(let i = 1; i <= n; i++){
    if( i % 100 === 0 && i % 400){
        cnt2++;
    }else if(i % 4 === 0){
        cnt++;
    }else{
        cnt2++;
    }
}
console.log(cnt);
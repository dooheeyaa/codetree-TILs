const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

input.map((x) => {
    if(x % 2 !== 0 && x % 3 === 0){
        console.log(x);
    }
})
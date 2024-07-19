const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

input.map( x=> {
    if(x > 0){
        console.log(x);
    }
})
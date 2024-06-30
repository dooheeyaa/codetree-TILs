const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let result = "";
for(i = a; i <= b; i++){
    if(i % 2 !== 0){
        result = result + i + " ";
    };
}
console.log(result);
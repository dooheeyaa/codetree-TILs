const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if((b < a && a < c ) || (c < a && a <b)){
    console.log(a);
}else if((a < b && b < c) || (c < b && b <a)){
    console.log(b);
}else if((a < c && c < b) || (b < c && c < a)){
    console.log(c);
}
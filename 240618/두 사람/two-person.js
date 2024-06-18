const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = input[0].split(' ');
let b = input[1].split(' ');

let aAge = Number(a[0]);
let aSex = a[1];

let bAge = Number(b[0]);
let bSex = b[1];

if((aAge >= 19 && aSex === 'M') || (bAge >= 19 && bSex === 'M')){
    console.log(1);
}else{
    console.log(0);
}
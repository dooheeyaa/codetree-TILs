const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let a = input[0].split(' ');
let b = input[1].split(' ');

let aMath = Number(a[0]);
let aEnglish = Number(a[1]);

let bMath = Number(b[0]);
let bEnglish = Number(b[1]);

if(aMath > bMath && aEnglish > bEnglish){
    console.log(1);
}else{
    console.log(0);
}
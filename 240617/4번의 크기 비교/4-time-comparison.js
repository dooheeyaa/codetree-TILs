const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let input2 = (input[1]).split(' ');

let a = Number(input[0]);
let b = Number(input2[0]);
let c = Number(input2[1]);
let d = Number(input2[2]);
let e = Number(input2[3]);

if(a > b){
    console.log(1);
}else{
    console.log(0);
}

if(a > c){
    console.log(1);
}else{
    console.log(0);
}

if(a > d){
    console.log(1);
}else{
    console.log(0);
}

if(a > e){
    console.log(1);
}else{
    console.log(0);
}
const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = Number(input[0]);
let b = Number(input[1]);

if (a === 0){
    if (b >= 19){
        console.log('MAN');
    }else {
        console.log('BOY');
    }
}else{
    if (b >= 19){
        console.log('WOMAN');
    }else {
        console.log('GIRL');
    }
}
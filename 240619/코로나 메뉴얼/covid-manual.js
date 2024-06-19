const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr1 = input[0].split(' ');
let arr2 = input[1].split(' ');
let arr3 = input[2].split(' ');

let a = String(arr1[0]);
let b = Number(arr1[1]);

let c = String(arr2[0]);
let d = Number(arr2[1]);

let e = String(arr3[0]);
let f = Number(arr3[1]);

let result1, result2, result3;

if(a === 'Y'){
    if(b >= 37){
        result1 = 'A';
    }else{
        result1 = 'C';
    }
}else{
    if(b >= 37){
        result1 = 'B';
    }else{
        result1 = 'D';
    }
}

if(c === 'Y'){
    if(d >= 37){
        result2 = 'A';
    }else{
        result2 = 'C';
    }
}else{
    if(d >= 37){
        result2 = 'B';
    }else{
        result2 = 'D';
    }
}

if(e === 'Y'){
    if(f >= 37){
        result3 = 'A';
    }else{
        result3 = 'C';
    }
}else{
    if(f >= 37){
        result3 = 'B';
    }else{
        result3 = 'D';
    }
}

if(result1 === 'A'){
    if(result2 === 'A' || result3 === 'A'){
        console.log('E');
    }else{
        console.log('N');
    }
}else{
    if(result2 === 'A' && result3 === 'A'){
        console.log('E');
    }else{
        console.log('N');
    }
}
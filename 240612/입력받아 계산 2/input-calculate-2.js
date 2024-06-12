const fs = require('fs');

let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let m = Number(arr[0]);
let n = Number(arr[1]);

console.log(m * n);
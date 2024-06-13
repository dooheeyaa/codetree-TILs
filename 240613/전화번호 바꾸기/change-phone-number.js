const fs = require('fs');

let input = fs.readFileSync(0).toString().split('-');

let a = input[0];
let x = Number(input[1]);
let y = Number(input[2]);

[x, y] = [y, x];

console.log(`${a}-${x}-${y}`);
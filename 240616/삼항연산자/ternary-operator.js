const fs = require('fs');
let score = fs.readFileSync(0).toString().trim();
score = Number(score);

let result = score === 100 ? 'pass' : 'failure';
console.log(result);
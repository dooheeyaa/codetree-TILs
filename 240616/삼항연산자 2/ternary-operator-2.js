const fs = require('fs');
let a = fs.readFileSync(0).toString().trim();
a = Number(a);

let result = a === 1 ? 't' : 'f';
console.log(result);
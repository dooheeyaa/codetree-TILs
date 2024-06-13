const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

let [s, t] = [input[0], input[1]];
[s, t] = [t, s];

console.log(s);
console.log(t);
const fs = require('fs');
a = Number(fs.readFileSync(0).toString().trim());

if(a === 5){
    a = 'A';
};

if(a % 2 === 0){
  a = 'B';
};

console.log(a);
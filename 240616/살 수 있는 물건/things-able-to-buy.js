const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();
n = Number(n);

if( n >= 3000){
    console.log('book');
}else if(n >= 1000) {
    console.log('mask');
}else {
    console.log('no');
}
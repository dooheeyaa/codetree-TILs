const fs = require('fs');

let number = fs.readFileSync(0).toString().trim();
number = Number(number);

if(number === 1){
    console.log('John');
}else if(number === 2){
    console.log('Tom');
}else if(number === 3){
    console.log('Paul');
}else {
    console.log('Vacancy');
}
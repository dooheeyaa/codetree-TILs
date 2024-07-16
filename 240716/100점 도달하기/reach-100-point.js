const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let grade = '';

for(let i = n; i <= 100; i++){
    if( i >= 90){
        grade += 'A' + ' ';
    }else if(i >= 80){
        grade += 'B' + ' ';
    }else if( i >= 70){
        grade += 'C' + ' ';
    }else if(i >= 60){
        grade += 'D' + ' ';
    }else{
        grade += 'F' + ' ';
    }
}
console.log(grade);
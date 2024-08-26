const sumAll = function(num1, num2) {

if (!Number.isInteger(num1)||!Number.isInteger(num2)||num1 < 0 || num2 < 0){
    return 'ERROR';
}

let sum = 0;
let small;
let large;

if (num1 < num2){
    small = num1;
    large = num2;
} else {
    small = num2;
    large = num1;
}

for (i=small; i<=large; i++) {
    sum += i;
}

return sum;
};

// Do not edit below this line
module.exports = sumAll;

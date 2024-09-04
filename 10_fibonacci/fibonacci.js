const fibonacci = function(number) {
    
    let value  = Number(number);

    if (value < 0) {
        return "OOPS";
    }
    else if (value === 0){
        return 0;
    }
    else{
        const array = [1,1];
        for (i=2; i<value; i++){
            let nextNum = array[array.length-2] + array[array.length-1];
            array.push(nextNum);
        }
        return array[value-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
